
from django.contrib import admin
from django.urls import path , include
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from apps.accounts.views import GoogleLogin
# from dj_rest_auth.jwt_auth import views as jwt_views

# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.accounts.urls')),
    path('api/auth/', include('dj_rest_auth.urls')),
    # path('api/auth/social/', include('dj_rest_auth.social_urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
    # path('social/google/', GoogleLogin.as_view(), name='google_login'),
    path('api/auth/social/google/', GoogleLogin.as_view(), name='google_login'),

    path('api/', include('apps.courses.urls')),
]
