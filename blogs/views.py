from django.shortcuts import get_object_or_404, render
from django.views import View
from .models import Blog

class BlogListView(View):
    template_name = "blogs/blog_list.html"

    def get(self, request):
        blogs = Blog.objects.all().order_by('-created_at')
        return render(request, self.template_name, {'blogs': blogs})


class BlogDetailView(View):
    template_name = "blogs/blog_detail.html"

    def get(self, request, pk):
        blog = get_object_or_404(Blog, pk=pk)
        return render(request, self.template_name, {'blog': blog})
