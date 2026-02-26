from django.urls import path
from .views import CookieTokenObtainPairView,CookieTokenRefreshView,LogOutView,IsAuthenticatedView

urlpatterns = [
    path('', CookieTokenObtainPairView.as_view(), name="tokens"),
    path('refresh/', CookieTokenRefreshView.as_view(), name="refresh_token"),
    path('logout/', LogOutView.as_view(), name="logout"),
    path('me/', IsAuthenticatedView.as_view(), name="me")
]
