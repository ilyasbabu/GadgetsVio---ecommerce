from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import TokenObtainPairView
from apis.serializers import CustomTokenObtainPairSerializer
import time


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


class CustomTokenRefreshView(TokenRefreshView):  # not used yet
    try:
        pass
    except Exception as e:
        print(e)
