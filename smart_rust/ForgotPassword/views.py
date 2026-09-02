from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.utils.crypto import get_random_string
import json
import logging

User = get_user_model()
logger = logging.getLogger(__name__)

@csrf_exempt
def forgot_password(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')

            if not email:
                return JsonResponse({'error': 'Email is required.'}, status=400)

            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({'error': 'User with this email does not exist.'}, status=404)

            token = get_random_string(32)
            logger.info(f"Generated token for {email}: {token}")
            
            # Store token in user's name field (temporary storage)
            user.name = token
            user.save()
            
            logger.info(f"Token saved to database for user {email}")

            reset_link = f"http://localhost:3000/reset-password/{token}"
            logger.info(f"Reset link: {reset_link}")
            
            send_mail(
                'Password Reset Request',
                f'Click the link to reset your password: {reset_link}',
                'smartrust9@gmail.com',  # Must match your email backend settings
                [email],
                fail_silently=False,
            )

            return JsonResponse({'message': 'Reset link sent to your email.'})
        except Exception as e:
            logger.error(f"Error in forgot_password: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)
