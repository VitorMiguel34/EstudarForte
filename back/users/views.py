#from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import CreateAPIView
from .models import Task,User
from .serializers import TaskSerializer,UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class UserViewSet(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class TaskViewSet(ModelViewSet):
    #queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(criador=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(criador=self.request.user)