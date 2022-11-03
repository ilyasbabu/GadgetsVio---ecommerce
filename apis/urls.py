from django.urls import path
from .views import *

urlpatterns = [
    path('products/',complete_products,name="complete_products"),
    path('product/<str:slug>',get_product_detail,name="get_product_detail"),
]