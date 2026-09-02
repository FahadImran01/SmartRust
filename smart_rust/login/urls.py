
from django.urls import path
from .views import login_view

urlpatterns = [
    path('', login_view, name='login'),  # empty path because main urls.py already has 'login/'
]
