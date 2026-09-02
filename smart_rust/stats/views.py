from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from predictions.models import Prediction
from collections import Counter

class StatisticsView(APIView):
    def get(self, request):
        predictions = Prediction.objects.all()

        monthly_data = {}
        for prediction in predictions:
            month = prediction.created_at.strftime("%b")  # e.g., Jan, Feb
            disease = prediction.result.lower()

            if month not in monthly_data:
                monthly_data[month] = {"Rust": 0, "Unknown": 0, "Healthy": 0}

            if "rust" in disease:
                monthly_data[month]["Rust"] += 1
            elif "blight" in disease:
                monthly_data[month]["Unknown"] += 1
            elif "healthy" in disease:
                monthly_data[month]["Healthy"] += 1

        # Format for chart
        disease_data = []
        for month in ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]:
            if month in monthly_data:
                disease_data.append({
                    "name": month,
                    **monthly_data[month]
                })

        # Fake severity (can be improved later)
        severity_data = [
            {
                "month": d["name"],
                "severity": round((d["Rust"] + d["Unknown"]) * 0.2, 1)
            } for d in disease_data
        ]

        most_common = Counter(p.result for p in predictions).most_common(1)
        most_common_disease = most_common[0][0] if most_common else ""
        total_cases = predictions.count()

        return Response({
            "total_cases": total_cases,
            "most_common_disease": most_common_disease,
            "high_risk_period": "Dec - Feb",  # static for now
            "disease_data": disease_data,
            "severity_data": severity_data,
        })
