from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
from django.shortcuts import render

def course_page(request):
    return render(request, "courses/index.html")

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes = [IsAdminOrReadOnlyForAuthenticatedUsers]

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user) 
        