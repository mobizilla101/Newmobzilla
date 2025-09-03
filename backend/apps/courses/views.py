from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
# from .permissions import IsAdminOrReadOnlyForAuthenticatedUsers
# 

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes = [IsAdminOrReadOnlyForAuthenticatedUsers]

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user) 