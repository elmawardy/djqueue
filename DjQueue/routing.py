""" Routing for Project Channels
"""
# mysite/routing.py
import Queue.routing
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

APP = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            Queue.routing.websocket_urlpatterns
        )
    ),
})