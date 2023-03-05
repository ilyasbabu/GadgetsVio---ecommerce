from django.urls import path
from apis.views.product_view import (
    HomePageAPI,
    ProductDetailPageAPI,
    ProductBasicDetailAPI,
    GetStockCountAPI,
)

urlpatterns = [
    path("", HomePageAPI.as_view(), name="complete_products"),
    path(
        "detail/<str:slug>", ProductDetailPageAPI.as_view(), name="get_product_detail"
    ),
    path(
        "basic/<str:slug>",
        ProductBasicDetailAPI.as_view(),
        name="get_product_basic_detail",
    ),
    path(
        "stock/<str:slug>", GetStockCountAPI.as_view(), name="get_product_stock_count"
    ),
]
