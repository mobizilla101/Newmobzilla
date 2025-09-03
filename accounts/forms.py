from django import forms
from django.contrib.auth import authenticate
from .models import User

class RegisterForm(forms.ModelForm):
    """
    Register form for registering user
    """
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ["name", "email", "password"]

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            self.add_error("confirm_password", "Passwords must match.")

        return cleaned_data


class LoginForm(forms.Form):
    """
    Login form for user login
    """
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get("email")
        password = cleaned_data.get("password")

        user = authenticate(email=email, password=password)
        if not user:
            raise forms.ValidationError("Invalid email or password")
        cleaned_data["user"] = user
        return cleaned_data
