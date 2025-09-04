from django.urls import path
from courses.views import CourseListView, CourseDetailView, purchase_course, watch_course

urlpatterns = [
    path("", CourseListView.as_view(), name="course_list"),
    path("<int:pk>/", CourseDetailView.as_view(), name="course_detail"),
    path('<int:course_id>/watch/', watch_course, name='watch_course'),
    path("<int:pk>/purchase/", purchase_course, name="purchase_course"),

]
