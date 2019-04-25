""" The Admin manager of the Queue App
"""

from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Service


class ServiceAdmin(admin.ModelAdmin):
    """ Service Admin Model
    """
    list_display = ('service_name', 'current_number', 'get_managers')
    search_fields = ['service_name']
    filter_horizontal = ('managers', )

admin.site.register(Service, ServiceAdmin)
# Register your models here.
