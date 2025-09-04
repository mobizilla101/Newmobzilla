from django.urls import path, include
from accounts import views
urlpatterns = [
    path('profile',views.profile_view, name="profile"),
    path('dashboard',views.dashboard_view, name="dashboard"),
    path('accounts/',include("allauth.urls")),
]
