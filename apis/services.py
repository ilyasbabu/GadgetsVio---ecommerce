import sys
import traceback
from .models import *
from django.core.exceptions import ValidationError
from django.db.models import Count, F, Value


def handle_error(e):
    print(e)
    msg = e
    error_info = "\n".join(traceback.format_exception(*sys.exc_info()))
    if isinstance(e, ValidationError):
        error_info = "\n".join(e.messages)
        msg = error_info
    return msg


def get_product_list():
    products = Product.objects.filter(is_active = True).prefetch_related('product_image').order_by("?")
    return products


def get_product_detail(slug):
    product = Product.objects.get(slug=slug, is_active=True)
    return product


def get_stock_count(slug):
    count = Product.objects.values_list('stock', flat=True).get(slug=slug, is_active=True)
    return count
