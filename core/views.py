from django.shortcuts import render

def homepage(request):
    context = {
        'message': 'Hello from Django!'
    }
    return render(request, "core/index.html", context)

def header(request):
    return render(request, "core/header.html")

def about(request):
    return render(request, "core/about.html")

def blogs(request):
    return render(request, "core/blogs.html")

def contact(request):
    return render(request, "core/contact.html")