from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class TokenTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(email="victor@gmail.com",password="123")
    
    def test_geracao_tokens(self):
        url=reverse("tokens")
        response = self.client.post(url,{
            "email":"victor@gmail.com",
            "password":"123"
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["mensagem"], "tokens enviados!")