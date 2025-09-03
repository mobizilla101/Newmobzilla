from rest_framework.routers import DefaultRouter
from .views import SceneViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'scenes', SceneViewSet, basename='scene')

urlpatterns = [
    path('', include(router.urls)),
]
