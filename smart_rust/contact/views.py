from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ContactMessage
from django.core.mail import send_mail
import json

@csrf_exempt
def submit_feedback(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not all([name, email, message]):
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            # Save to DB
            ContactMessage.objects.create(name=name, email=email, message=message)

            # Send email
            send_mail(
                subject=f" New Contact Message from {name}",
                message=message,
                from_email="smartrust9@gmail.com",  # This must be in your SMTP settings
                recipient_list=["smartrust9@gmail.com"],
                fail_silently=False,
            )

            return JsonResponse({'message': 'Feedback stored and email sent!'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid method'}, status=405)
