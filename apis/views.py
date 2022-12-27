import time
import json
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.utils.translation import gettext as _
from .models import Product
from django.core.exceptions import ValidationError
from .serializers import ProductListSerializer, ProductDetailSerializer, ProductBasicDetailSerializer
from .services import get_product_detail, get_product_list, handle_error

from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.exceptions import ValidationError as DRFValidationError
from rest_framework.views import exception_handler as drf_exception_handler

# Create your views here.


class HomePageAPI(APIView):
    """API for home page"""

    authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            result = get_product_list()
            serializer = ProductListSerializer(result, many=True)
            time.sleep(0.5)
            return Response(serializer.data)
        except Exception as e:
            result = handle_error(e)
            return Response(json.dumps(str(result)),status=400)


class ProductDetailPageAPI(APIView):
    """API for product detail page"""

    authentication_classes = [SessionAuthentication]

    def get(self, request, slug):
        try:
            result = get_product_detail(slug)
            serializer = ProductDetailSerializer(result)
            time.sleep(0.5)
            return Response(serializer.data)
        except Exception as e:
            result = handle_error(e)
            return Response(json.dumps(str(result)),status=400)


class ProductBasicDetailAPI(APIView):
    """API for product basic details"""

    authentication_classes = [SessionAuthentication]

    def get(self, request, slug):
        try:
            result = get_product_detail(slug)
            serializer = ProductBasicDetailSerializer(result)
            time.sleep(0.5)
            return Response(serializer.data)
        except Exception as e:
            result = handle_error(e)
            return Response(json.dumps(str(result)),status=400)


class CartPageAPI(APIView):
    """API for cart page"""

    def get(self, request):
        try:
            return Response("Test")
        except Exception as e:
            result = handle_error(e)
            return Response(json.dumps(str(result)),status=400)