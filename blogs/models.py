from django.db import models
from django.contrib.auth import get_user_model
from cloudinary_storage.storage import MediaCloudinaryStorage

User = get_user_model()
class Blog(models.Model):
    title = models.CharField(max_length=2500, blank=True, null=True)
    subtitle = models.CharField(max_length=250, blank=True, null=True)
    content = models.TextField(default=None)
    thumbnail = models.ImageField(upload_to='images/', null=True, blank=True, storage=MediaCloudinaryStorage)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title or ""
    
    
    def delete(self, *args, **kwargs): # type: ignore
        if self.thumbnail:
            storage, path = self.thumbnail.storage, self.thumbnail.path
            if storage.exists(path):
                storage.delete(path)
        super().delete(*args, **kwargs)
 