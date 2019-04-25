# chat/consumers.py
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Service
import json

class QueueConsumer(AsyncWebsocketConsumer):
    """ Queue Consumer that handles ws requests
    """
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):

        """ recieves a json websocket request with text_data that contains type: (changeNumber) 
            , serviceID & value then broadcasts it to all connections
        """
        # Send message to room group
        #this calls the chat_message method
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'queue_message',
                'content':json.loads(text_data)
            }
        )

    # Receive message from room group
    async def queue_message(self, event):
        message = event['content']

        s = Service.objects.get(pk=message["serviceID"])
        s.current_number = message["value"]
        s.save()

        # Send message to all (queue group) WebSocket clients
        await self.send(text_data=json.dumps({
            **message
        }))