from django.urls import path,include
from .views import TaskViewSet,UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tasks',TaskViewSet, basename="tasks")
#router.register(r'',UserViewSet, basename="users")

urlpatterns = [
    path("",include(router.urls)),#tasks
    path("register/", UserViewSet.as_view())
]
