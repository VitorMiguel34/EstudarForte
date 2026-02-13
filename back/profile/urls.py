from django.urls import path,include
from .views import TaskViewSet,ProfileViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'task',TaskViewSet, basename="task")
router.register(r'',ProfileViewSet, basename="profile")


urlpatterns = [
    path("",include(router.urls))
]
