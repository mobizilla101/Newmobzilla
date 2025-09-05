# # views.py

# from rest_framework import viewsets
# from rest_framework.permissions import AllowAny
# from .models import Scene
# from .serializers import SceneSerializer
# from django.utils.decorators import method_decorator
# from django.views.decorators.cache import cache_page

# class SceneViewSet(viewsets.ModelViewSet):  # ✅ not ReadOnly anymore!
#     queryset = Scene.objects.all()
#     serializer_class = SceneSerializer
#     permission_classes = [AllowAny]
#     lookup_field = 'name'  # Enables /api/scenes/home/

#     @method_decorator(cache_page(60 * 60 * 24), name='dispatch')
#     def dispatch(self, *args, **kwargs):
#         return super().dispatch(*args, **kwargs)
