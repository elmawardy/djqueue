""" Queue App Models
"""

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class Service(models.Model):
    """ This is the service in which people will be waiting on queue to access it
    """
    service_name = models.CharField(max_length=100)
    current_number = models.IntegerField(default=0)
    managers = models.ManyToManyField(settings.AUTH_USER_MODEL)
    def __str__(self):
        return self.service_name

    def get_managers(self):
        """ Gets All Managers for a service (manager id - manager name)
        """
        return "\n".join([str(m.id) + "- " +  m.first_name for m in self.managers.all()])

    @staticmethod
    def get_services():
        """ Gets all services basic info
        """
        services = Service.objects.values('service_name', 'current_number', 'id')
        return services
    @staticmethod
    def get_user_services(username):
        """ returns all user managed services based on userid
        """

        #Notice the extra function that gives column names aliases
        services = Service.objects.filter(managers__username=username).extra(select={'currentNumber' : 'current_number'}).values('service_name', 'currentNumber', 'id')
        return services


class Settings(models.Model):
    """ Settings for homepage
    """
    news = models.TextField()
    class Meta:
        verbose_name = 'Settings'
        verbose_name_plural = 'Settings'

# class ServiceManagersFilter(admin.SimpleListFilter):
#     title = "Managers"
#     parameter_name = 'get_managers'



# Create your models here.
