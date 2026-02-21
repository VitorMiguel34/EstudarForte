#from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from .models import Task
from django.contrib.auth import get_user_model
from .serializers import TaskSerializer,UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

User = get_user_model()
class RegisterView(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"mensagem":"cadastro concluido com sucesso"}, status=status.HTTP_200_OK)
        
class UserViewSet(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class TaskViewSet(ModelViewSet):
    #queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        print(self.request.user)
        return Task.objects.filter(criador=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(criador=self.request.user)