from django.urls import path
from accounts import views

urlpatterns = [
    path('login/', views.login_view, name='register'),
    path('register/', views.register_view, name='register'),
]
