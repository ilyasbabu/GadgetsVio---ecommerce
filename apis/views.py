import time
import sys
import traceback
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.utils.translation import gettext as _
from .models import Product
from django.core.exceptions import ValidationError
from .serializers import ProductListSerializer, ProductDetailSerializer


# Create your views here.


class HomePageAPI(APIView):
    """API for home page"""

    authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            products = Product.objects.filter(
                    is_active = True
                ).prefetch_related('product_image').order_by("?")
            serializer = ProductListSerializer(products, many=True)
            time.sleep(0.5)
            # raise ValidationError("Something went wrong!")
            return Response(serializer.data)
        except Exception as e:
            msg = e
            error_info = "\n".join(traceback.format_exception(*sys.exc_info()))
            print(error_info)
            if isinstance(e, ValidationError):
                error_info = "\n".join(e.messages)
                msg = error_info
            return Response(msg,status=400)


class ProductDetailPageAPI(APIView):
    """API for product detail page"""

    authentication_classes = [SessionAuthentication]

    def get(self, request, slug):
        product = Product.objects.get(slug=slug)
        serializer = ProductDetailSerializer(product)
        time.sleep(0.5)

        return Response(serializer.data)
