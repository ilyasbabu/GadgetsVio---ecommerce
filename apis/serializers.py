from email.mime import image
from rest_framework import serializers
from .models import *



class ProductListSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    rating_count = serializers.IntegerField()
    avg_rating = serializers.DecimalField(max_digits=2, decimal_places=1)
    slug = serializers.SlugField()
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        image = ProductImage.objects.filter(id = obj.id, is_main = True)
        image = image[0]
        return (image.path.url)


class ProductDetailSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    rating_count = serializers.IntegerField()
    avg_rating = serializers.DecimalField(max_digits=2, decimal_places=1)
    slug = serializers.SlugField()
    image = serializers.SerializerMethodField()
    brand = serializers.CharField()
    category = serializers.CharField()
    stock = serializers.IntegerField()

    def get_image(self, obj):
        image = ProductImage.objects.filter(id = obj.id, is_main = True)
        image = image[0]
        return (image.path.url)
