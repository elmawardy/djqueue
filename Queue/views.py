""" Views for Queue app
"""
import json
from django.shortcuts import get_object_or_404,render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
from django.forms.models import model_to_dict
from .models import Service, Settings


def index(request):
    """ Returns the Homepage of the queue app that contains
        the Reactjs app which displays the Services and their current states in real time.
    """
    return render(request, 'queue/homepage.html')

@login_required
def profile(request):
    """ returns user profile in reactjs app
    """
    return render(request,'queue/profile.html')

def login(request):
    """ returns the login /accounts/login for allauth
    """
    if request.user.is_authenticated:
        return redirect('/profile/')
    else:
        return redirect('/accounts/login/')


def get_services(request):
    """ Returns a json of all Services basic info (Name & Current Number)
    """
    return HttpResponse(json.dumps(list(Service.get_services())))

def get_news(request):
    """ returns the news of the Settings table 1st row
    """
    return HttpResponse(Settings.objects.first().news)

def servicemanager(request, id):
    """ returns service counter page (reactjs app)
    """
    service = get_object_or_404(Service, pk=id)
    return render(request, 'queue/servicemanager.html', {'service':service})

def get_user_services(request, username):
    """ this returns all services that are managed by a user in a json format
    """
    return HttpResponse(json.dumps(list(Service.get_user_services(username))))

def get_specific_service(request, serviceid):
    """ returns json data of a specific service
    """
    servicedata = Service.objects.filter(id=serviceid).values('service_name', 'current_number', 'id').first()
    return HttpResponse(json.dumps(servicedata))

# Create your views here.
