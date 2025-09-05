# from rest_framework import serializers
# from .models import Scene

# class SceneSerializer(serializers.ModelSerializer):
#     glb_url = serializers.SerializerMethodField()
    
#     def get_glb_url(self, obj):
#         request = self.context.get('request')
#         if obj.optimized_glb:
#             return request.build_absolute_uri(obj.optimized_glb.url)
#         return request.build_absolute_uri(obj.original_glb.url)
    
#     class Meta:
#         model = Scene
#         fields = ['id', 'name', 'glb_url', 'created_at']
#         read_only_fields = ['glb_url', 'created_at']