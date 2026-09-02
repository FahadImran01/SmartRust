from django.shortcuts import render
# Create your views here.
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Prediction
from .serializers import PredictionSerializer
class UploadAndPredict(APIView):
    def post(self, request):
        file = request.FILES.get("file")
        if not file:
            return Response({"error": "No file uploaded"}, status=400)

        try:
            model_response = requests.post("http://localhost:5000/predict", files={"file": file})
            model_response.raise_for_status()  # raises HTTPError for 4xx/5xx
            model_data = model_response.json()
            prediction = model_data.get("prediction", "Unknown")
            recommendation = model_data.get("recommendation", "")

        except requests.exceptions.RequestException as e:
            print("Error connecting to model server:", e)
            return Response({"error": "Failed to get prediction from model server"}, status=500)
        except ValueError:
            print("Invalid JSON response:", model_response.text)
            return Response({"error": "Invalid response from model server"}, status=500)

        # Save in DB
        prediction = Prediction.objects.create(image=file, result=prediction, recommendation=recommendation)
        serializer = PredictionSerializer(prediction)
        return Response(serializer.data)
