from django.db.models.fields.related import create_many_to_many_intermediary_model
from django.shortcuts import render
from rest_framework import generics, status, viewsets
from .serializers import SongSuggestionSerializer, CreateSuggestionSerializer
from .models import songSuggestion
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse

# Create your views here.
class SongSuggestionView(viewsets.ModelViewSet):
    queryset = songSuggestion.objects.all()
    serializer_class = SongSuggestionSerializer