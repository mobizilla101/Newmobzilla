from django.shortcuts import render

def homepage(request):
    context = {
        'message': 'Hello from Django!'
    }
    return render(request, "core/index.html", context)