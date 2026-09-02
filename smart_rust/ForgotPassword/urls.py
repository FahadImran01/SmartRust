from django.urls import path
from .views import forgot_password

urlpatterns = [
    path('api/forgot-password/', forgot_password, name='forgot-password'),
]
