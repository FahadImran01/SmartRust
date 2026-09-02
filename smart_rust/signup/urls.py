from django.urls import path
from .views import signup  # Import the signup view

urlpatterns = [
    path('', signup, name='signup'),  # empty '' because /signup/ is already prefixed from main urls.py
]
