import sys
import json
import time
import traceback
from .models import *
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404
from .serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductBasicDetailSerializer,
    BrandListSerializer,
)
from django.db.models import Count, F, Value
from django.conf import settings


def wait():
    if settings.DEBUG:
        time.sleep(0.5)


def handle_error(e):
    print(e)
    msg = e
    error_info = "\n".join(traceback.format_exception(*sys.exc_info()))
    if isinstance(e, ValidationError):
        error_info = "\n".join(e.messages)
        msg = error_info
    return {"detail": msg}


def get_product_list():
    try:
        wait()
        products = (
            Product.objects.filter(is_active=True)
            .prefetch_related("product_image")
            .order_by("?")
        )
        serialized_products = ProductListSerializer(products, many=True)
        brands = Brand.objects.filter(is_active=True).order_by("?")
        serialized_brands = BrandListSerializer(brands, many=True)
        data = {"products": serialized_products.data, "brands": serialized_brands.data}
        return Response(data=data)
    except Exception as e:
        return Response(handle_error(e), status=406)


def get_product_detail(slug):
    try:
        wait()
        product = get_object_or_404(Product, slug=slug, is_active=True)
        serialized_product = ProductDetailSerializer(product)
        return Response(serialized_product.data)
    except Exception as e:
        return Response(handle_error(e), status=406)


def get_product_basic_detail(slug):
    try:
        wait()
        product = get_object_or_404(Product, slug=slug, is_active=True)
        serialized_product = ProductBasicDetailSerializer(product)
        return Response(serialized_product.data)
    except Exception as e:
        return Response(handle_error(e), status=406)


def get_stock_count(slug):
    try:
        wait()
        count = Product.objects.values_list("stock", flat=True).get(
            slug=slug, is_active=True
        )
        return Response(json.dumps(count))
    except Exception as e:
        return Response(handle_error(e), status=406)
