from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Task,User
from .serializers import TaskSerializer,UserSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer