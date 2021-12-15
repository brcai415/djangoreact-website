from rest_framework import serializers
from .models import songSuggestion

class SongSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = songSuggestion
        fields = ('artistName', 'songName', 'created_at')
 
class CreateSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = songSuggestion
        fields = ('artistName', 'songName')