from core.views import homepage
from django.urls import path

urlpatterns = [
    path('home/', homepage, name='homepage')
]