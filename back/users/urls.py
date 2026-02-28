from django.urls import path,include
from .views import TaskViewSet,RegisterView,UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tasks',TaskViewSet, basename="tasks")
router.register(r'users',UserViewSet, basename="users")

#router.register(r'',UserViewSet, basename="users")

urlpatterns = [
    path("",include(router.urls)),#tasks
    path("register/", RegisterView.as_view())
]
