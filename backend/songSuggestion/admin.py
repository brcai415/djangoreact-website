from django.contrib import admin
from .models import songSuggestion
# Register your models here.

class songSuggestionAdmin(admin.ModelAdmin):
    list_display = ('artistName', 'songName', 'created_at')

admin.site.register(songSuggestion, songSuggestionAdmin)