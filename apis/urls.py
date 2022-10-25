from django.urls import path
from .views import *

urlpatterns = [
    path('products/',complete_products,name="complete_products"),
]