from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class Task(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=500, blank=True)
    data = models.DateField()
    status = models.BooleanField(default=False)
    criador = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='tarefas')

    def __str__(self) -> str:
        return self.titulo
