from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.

@api_view(('GET',))
def complete_products(request):
    products = Product.objects.filter(is_active = True).prefetch_related('product_image')
    serializer = ProductListSerializer(products, many=True)
    return Response(serializer.data)


@api_view(('GET',))
def get_product_detail(request,slug):
    product = Product.objects.get(slug=slug)
    serializer = ProductDetailSerializer(product)
    return Response(serializer.data)
