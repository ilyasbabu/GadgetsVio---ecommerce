from django.urls import path
from .views import *

urlpatterns = [
    path('products/',HomePageAPI.as_view(),name="complete_products"),
    path('product/<str:slug>',ProductDetailPageAPI.as_view(),name="get_product_detail"),
]