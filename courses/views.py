from django.shortcuts import get_object_or_404, redirect, render
from django.views.generic import ListView, DetailView
from .models import Course, Purchase
from django.contrib.auth.decorators import login_required
from courses.models import Comment
class CourseListView(ListView):
    model = Course
    template_name = "courses/course_list.html"
    context_object_name = "courses"


class CourseDetailView(DetailView):
    model = Course
    template_name = "courses/course_detail.html"
    context_object_name = "course"

@login_required
def purchase_course(request, pk):
    course = Course.objects.get(pk=pk)
    Purchase.objects.get_or_create(user=request.user, course=course)
    return redirect("course_detail", pk=pk)


@login_required
def watch_course(request, course_id):
    course = get_object_or_404(Course, pk=course_id)

    # Check if paid course
    if course.pricing == "paid":
        purchased = Purchase.objects.filter(user=request.user, course=course).exists()
        if not purchased:
            return redirect('purchase_course', course.pk)

    # Handle comment submission
    if request.method == "POST":
        content = request.POST.get("content")
        if content:
            Comment.objects.create(course=course, user=request.user, content=content)
            return redirect('watch_course', course_id=course.pk)

    return render(request, 'courses/watch_course.html', {'course': course})