from django.db import models

# Create your models here.
# models.py
class Prediction(models.Model):
    image = models.ImageField(upload_to='uploads/')
    prediction = models.CharField(max_length=100)
    recommendation = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
