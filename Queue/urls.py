""" Urls definitioins for the queue app
"""
from django.urls import path
from . import views


app_name = 'queue'
urlpatterns = [
    path('', views.index, name='index'),
    path('servicemanager/<int:id>', views.servicemanager, name='servicemanager'),
    path('get1service/<int:serviceid>', views.get_specific_service, name='get1service'),
    path('profile/', views.profile, name='profile'),
    path('login/', views.login, name='login'),
    path('get_services/', views.get_services, name='get_services'),
    path('get_user_services/<slug:username>', views.get_user_services, name='get_user_services')
]