from django.contrib import admin
from .models import Scene  
# Register your models here.
# class SceneAdmin(admin.ModelAdmin):
#     list_display = ('name', 'created_at', 'original_glb', 'optimized_glb')
#     search_fields = ('name',)

admin.site.register(Scene) 