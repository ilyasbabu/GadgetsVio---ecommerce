from email.mime import image
from rest_framework import serializers
from .models import ProductImage, Review



class ProductListSerializer(serializers.Serializer):
    name = serializers.CharField()
    description = serializers.CharField()
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    rating_count = serializers.IntegerField()
    avg_rating = serializers.DecimalField(max_digits=2, decimal_places=1)
    slug = serializers.SlugField()
    image = serializers.SerializerMethodField()
    in_stock = serializers.SerializerMethodField()

    def get_image(self, obj):
        image = ProductImage.objects.filter(id = obj.id, is_main = True)
        image = image[0]
        return (image.path.url)

    def get_in_stock(self, obj):
        if obj.stock:
            return True
        else:
            return False


class ReviewSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    rating = serializers.IntegerField()
    heading = serializers.CharField()
    description = serializers.CharField()
    helpful_count = serializers.IntegerField()
    by = serializers.CharField(source="added_by.username")
    created_time = serializers.DateTimeField(format="%B %Y")

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
    reviews = serializers.SerializerMethodField()

    def get_image(self, obj):
        image = ProductImage.objects.filter(id = obj.id, is_main = True)
        image = image[0]
        return (image.path.url)

    def get_reviews(self, obj):
        reviews = Review.objects.filter(is_active=True, product = obj)
        return ReviewSerializer(reviews, many=True).data

class ProductBasicDetailSerializer(serializers.Serializer):
    name = serializers.CharField()
    brand = serializers.CharField()
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    slug = serializers.SlugField()
    image = serializers.SerializerMethodField()
    stock = serializers.IntegerField()

    def get_image(self, obj):
        image = ProductImage.objects.filter(id = obj.id, is_main = True)
        image = image[0]
        return (image.path.url)

