"""DjQueue URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.models import Group
from django.urls import path, include
from django.contrib.sites.models import Site
from allauth.account.models import EmailAddress
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Queue.urls')),
    path('accounts/', include('allauth.urls')),
]


admin.site.site_header = "Administration"
admin.site.site_title = "Administration"
admin.site.index_title = "Welcome to DjQueue"
admin.site.unregister(Group)
admin.site.unregister(Site)
admin.site.unregister(EmailAddress)
