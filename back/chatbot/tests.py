from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse

class TesteChatbot(APITestCase):
    def teste_chatbot(self):
        response = self.client.post(
            reverse("resposta_chatbot"),
            data={"pergunta":"me explique equação de primeiro grau"},
            format="json"
        )
        resposta_pergunta = response.json()["body"]["resposta"]
        print(resposta_pergunta)