from django.urls import path
from .views import CookieTokenObtainPairView,CookieTokenRefreshView,LogOutView

urlpatterns = [
    path('', CookieTokenObtainPairView.as_view()),
    path('refresh/', CookieTokenRefreshView.as_view()),
    path('logout/', LogOutView.as_view())
]
