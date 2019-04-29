""" The Admin manager of the Queue App
"""

from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Service, Settings


class ServiceAdmin(admin.ModelAdmin):
    """ Service Admin Model
    """
    list_display = ('service_name', 'current_number', 'get_managers')
    search_fields = ['service_name']
    filter_horizontal = ('managers', )

class SettingsAdmin(admin.ModelAdmin):
    """ Settings Admin Model
    """
    # list_display = ('news')


admin.site.register(Service, ServiceAdmin)
admin.site.register(Settings, SettingsAdmin)
# Register your models here.
