from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.

@api_view(('GET',))
def complete_products(request):
    products = Product.objects.filter(is_active = True).prefetch_related('product_image')
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
