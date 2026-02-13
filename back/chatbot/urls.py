from django.urls import path
from . import views

urlpatterns = [
    path("resposta_chatbot", views.resposta_chatbot, name="resposta_chatbot")
]
