from django.db import models
from django.contrib.auth.models import AbstractUser


class Profile(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

class Task(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=500, blank=True)
    data = models.DateField()
    status = models.BooleanField(default=False)
    criador = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='tarefas')

    def __str__(self) -> str:
        return self.titulo
