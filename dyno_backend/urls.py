from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static

def redirect_to_login(request):
    return redirect('/accounts/login/')

urlpatterns = [
    path('', redirect_to_login, name="redirect_to_login"), 
    path('', include('accounts.urls')),
    path('blogs', include('blogs.urls')),
    path('', include('core.urls'), name='core'),
    path('admin/', admin.site.urls),
    path('course/', include('courses.urls')),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)