from django.urls import path
from .views import *

urlpatterns = [
    path('products/',HomePageAPI.as_view(),name="complete_products"),
    path('product/detail/<str:slug>',ProductDetailPageAPI.as_view(),name="get_product_detail"),
    path('product/basic/<str:slug>',ProductBasicDetailAPI.as_view(),name="get_product_basic_detail"),
    path('product/stock/<str:slug>', GetStockCountAPI.as_view(),name="get_product_stock_count"),
]