from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.utils.translation import gettext as _
from apis.services import (
    get_product_detail,
    get_product_list,
    get_stock_count,
    get_product_basic_detail,
)


class HomePageAPI(APIView):
    """API for home page"""

    authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        print(request.user)
        # raise ValueError/
        response = get_product_list()
        return response


class ProductDetailPageAPI(APIView):
    """API for product detail page"""

    authentication_classes = [SessionAuthentication]

    def get(self, request, slug):
        response = get_product_detail(slug)
        return response


class ProductBasicDetailAPI(APIView):
    """API for product basic details"""

    authentication_classes = [SessionAuthentication]

    def get(self, request, slug):
        response = get_product_basic_detail(slug)
        return response


class CartPageAPI(APIView):
    """API for cart page"""

    def get(self, request):
        return Response("Test")


class GetStockCountAPI(APIView):
    """API for get stock count of a particular product"""

    def get(self, request, slug):
        result = get_stock_count(slug)
        return result
