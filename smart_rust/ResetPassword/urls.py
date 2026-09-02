from django.urls import path
from .views import reset_password, debug_tokens

urlpatterns = [
    path('', reset_password, name='reset_password'),
    path('debug/', debug_tokens, name='debug_tokens'),
]
