from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.core.exceptions import ValidationError
import os
User = get_user_model()


def validate_image(file):
    valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']
    ext = os.path.splitext(file.name)[1].lower()
    if ext not in valid_extensions:
        raise ValidationError('Only image files are allowed (jpg, png, gif).')

def validate_video(file):
    valid_extensions = ['.mp4', '.avi', '.mov', '.mkv']
    ext = os.path.splitext(file.name)[1].lower()
    if ext not in valid_extensions:
        raise ValidationError('Only video files are allowed (mp4, avi, mov, mkv).')

class Course(models.Model):
    PRICING_CHOICES = (
        ('free', 'Free'),
        ('paid', 'Paid'),
    )

    title = models.CharField(max_length=255)
    instructor = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True
    )
    category = models.CharField(max_length=100)
    pricing = models.CharField(max_length=10, choices=PRICING_CHOICES)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='thumbnails/', null=True, blank=True,validators=[validate_image])
    content = models.FileField(upload_to='content/', null=True, blank=True,validators=[validate_video])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
