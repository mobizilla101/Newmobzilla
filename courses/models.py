from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.core.exceptions import ValidationError
import os
from cloudinary_storage.storage import MediaCloudinaryStorage


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
    DEVICE_CHOICES = (
            ('android', 'Android'),
            ('iphone', 'Iphone'),
        )
    title = models.CharField(max_length=255)
    instructor = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True
    )
    category = models.CharField(max_length=100)
    device = models.CharField(max_length=25, choices=DEVICE_CHOICES, blank=True)
    pricing = models.CharField(max_length=10, choices=PRICING_CHOICES)
    price = models.FloatField(max_length=5, default=None, null=True, blank=True)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='images/thumbnails/', null=True, blank=True,validators=[validate_image], storage=MediaCloudinaryStorage)
    content = models.FileField(upload_to='vieos/content/', null=True, blank=True,validators=[validate_video], storage=MediaCloudinaryStorage)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Purchase(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    purchased_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "course")

    def __str__(self):
        return f"{self.user} → {self.course}"

class Comment(models.Model):
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='comments'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE
    )
    content = models.TextField(max_length=1000)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['course', '-created_at']),
            models.Index(fields=['user', '-created_at']),
        ]

    def __str__(self):
        return f"Comment by {self.user} on {self.course.title}"
