from rest_framework.serializers import ModelSerializer
from .models import Task
from django.contrib.auth import get_user_model

User = get_user_model()
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password")
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"