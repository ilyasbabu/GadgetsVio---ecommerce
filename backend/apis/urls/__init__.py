from django.conf.urls import include
from django.urls import path

urlpatterns = [
    path("account/", include("apis.urls.account_urls")),
    path("product/", include("apis.urls.product_urls")),
]
