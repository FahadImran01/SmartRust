from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, city, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not name:
            raise ValueError('Users must have a name')
        if not city:
            raise ValueError('Users must provide a city')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, city=city)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, city, password=None):
        user = self.create_user(email, name, city, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=100)
    reset_token = models.CharField(max_length=100, blank=True, null=True)  # For password reset
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'city']

    def __str__(self):
        return self.email
