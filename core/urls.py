from core import views
from django.urls import path

urlpatterns = [
    path('home/', views.homepage, name='home'),
    path('header/', views.header, name='header'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]