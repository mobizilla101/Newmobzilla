from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, course_page

router = DefaultRouter()
router.register('courses', CourseViewSet, basename='courses')

urlpatterns = [
    path('', course_page, name="course_page"),
    # path('', include(router.urls)),
]
