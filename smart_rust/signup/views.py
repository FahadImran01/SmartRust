from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
import json

User = get_user_model()  # ✅ Important: use the custom user model

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(" Incoming signup data:", data)

            name = data.get('name')
            email = data.get('email')
            city = data.get('city')
            password = data.get('password')
            confirm_password = data.get('confirmPassword')

            if not all([name, email, city, password, confirm_password]):
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            if len(password) < 6:
                return JsonResponse({'error': 'At least 6 characters required.'}, status=400)

            if password != confirm_password:
                return JsonResponse({'error': 'Passwords do not match.'}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already in use.'}, status=400)

            user = User.objects.create_user(
                email=email,
                password=password,
                name=name,
                city=city
            )
            user.save()

            return JsonResponse({'message': 'User created successfully'}, status=201)

        except Exception as e:
            print(" Error:", str(e))
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
