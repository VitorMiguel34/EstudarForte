from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Task,Profile
from .serializers import TaskSerializer,ProfileSerializer

class ProfileViewset(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer