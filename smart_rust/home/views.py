from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        user = User.objects.get(email=email)
        user_auth = authenticate(username=user.username, password=password)
        if user_auth:
            return Response({"message": "Login successful", "user": user.username})
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
@api_view(['POST'])
def reset_password(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        # Normally, you'd send a real email. Here we'll simulate it:
        return Response({"message": f"Password reset link sent to {email}"})
    except User.DoesNotExist:
        return Response({"error": "Email not registered"}, status=status.HTTP_404_NOT_FOUND)
