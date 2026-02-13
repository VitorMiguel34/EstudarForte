from rest_framework.serializers import ModelSerializer
from .models import Task,User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"