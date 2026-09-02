from django.db import models

# Create your models here.
from django.db import models

class Prediction(models.Model):
    image = models.ImageField(upload_to="uploads/")
    result = models.CharField(max_length=100)
    recommendation = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
