from email.mime import image
from rest_framework import serializers
from .models import *



class ProductSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('_get_main_image')
    def _get_main_image(self, product_instance):
        print(product_instance)
        image = ProductImage.objects.filter(id = product_instance.id, is_main = True)
        image = image[0]
        return (image.path.url)
    class Meta:
        model = Product
        fields = "__all__"

