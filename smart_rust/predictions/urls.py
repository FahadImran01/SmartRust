from django.urls import path
from .views import UploadAndPredict

urlpatterns = [
    path('predict/', UploadAndPredict.as_view()),
]
