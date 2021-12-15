from django.db import models

# Create your models here.
class songSuggestion(models.Model):
    artistName = models.TextField()
    songName = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ["artistName", "songName"]