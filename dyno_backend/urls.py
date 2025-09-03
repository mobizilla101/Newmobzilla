
from django.contrib import admin
from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import path , include
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from accounts.views import GoogleLogin
# from dj_rest_auth.jwt_auth import views as jwt_views

# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter

def redirect_to_login(request):
    return redirect('/accounts/login/')
urlpatterns = [
    path('', redirect_to_login, name="redirect_to_login"), 
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('allauth.urls')),
    
    path('', include('core.urls'), name='core'),
    path('admin/', admin.site.urls),
    path('api/auth/', include('dj_rest_auth.urls')),
    # path('api/auth/social/', include('dj_rest_auth.social_urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
    # path('social/google/', GoogleLogin.as_view(), name='google_login'),
    # path('api/auth/social/google/', GoogleLogin.as_view(), name='google_login'),

    path('course/', include('courses.urls')),
]
