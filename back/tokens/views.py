from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED, HTTP_200_OK
from rest_framework.views import APIView

class CookieTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code != HTTP_200_OK:
            return response
        
        access = response.data["access"]
        refresh = response.data["refresh"]
        
        res = Response({"mensagem":"tokens enviados!"})

        res.set_cookie(
            key="access",
            value=access,
            secure=False,
            httponly=True,
            samesite="Lax",
            max_age=15*60 #15 minutos
        )

        res.set_cookie(
            key="refresh",
            value=refresh,
            secure=False,
            httponly=True,
            samesite="Lax",
            max_age=24*60*60 #1 dia
        )

        return res


class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh = request.COOKIES.get("refresh")

        if not refresh:
            return Response({
                "mensagem":"refresh token não encontrado"
            }, status=HTTP_401_UNAUTHORIZED)
        
        request.data["refresh"] = refresh
        response = super().post(request,*args, **kwargs)

        if response.status_code != HTTP_200_OK:
            return response
        
        access = response.data.get("access")
        res = Response({"mensagem":"Access token renovado"})
        res.set_cookie(
            key="access",
            value=access,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=15*60
        )

        return res

class LogOutView(APIView):
    def post(request):
        res = Response("Logout concluido")
        res.delete_cookie("access")
        res.delete_cookie("refresh")
        return res