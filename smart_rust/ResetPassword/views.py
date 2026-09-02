from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
import logging

User = get_user_model()
logger = logging.getLogger(__name__)

@csrf_exempt
def debug_tokens(request):
    """Debug view to check what tokens exist in the database"""
    if request.method == 'GET':
        users_with_tokens = User.objects.filter(name__isnull=False).exclude(name='')
        token_data = [(u.email, u.name) for u in users_with_tokens]
        return JsonResponse({'tokens': token_data})
    return JsonResponse({'error': 'GET method only'}, status=405)

@csrf_exempt
def reset_password(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            token = data.get('token')
            new_password = data.get('newPassword')
            confirm_password = data.get('confirmPassword')

            logger.info(f"Reset password attempt with token: {token}")

            if not token or not new_password or not confirm_password:
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            if new_password != confirm_password:
                return JsonResponse({'error': 'Passwords do not match.'}, status=400)

            # Look up the user using the token stored in name field
            try:
                user = User.objects.get(name=token)
                logger.info(f"Found user with token: {user.email}")
            except User.DoesNotExist:
                logger.error(f"No user found with token: {token}")
                # Let's also check what tokens exist in the database
                all_users_with_tokens = User.objects.filter(name__isnull=False).exclude(name='')
                logger.info(f"Users with tokens in database: {[(u.email, u.name) for u in all_users_with_tokens]}")
                return JsonResponse({'error': 'Invalid or expired token.'}, status=404)

            user.set_password(new_password)
            user.name = ''  # Clear the token
            user.save()
            
            logger.info(f"Password reset successful for user: {user.email}")

            return JsonResponse({'message': 'Password reset successfully.'})

        except Exception as e:
            logger.error(f"Error in reset_password: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)
