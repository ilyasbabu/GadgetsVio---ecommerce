from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class BaseModel(models.Model):
    is_active = models.BooleanField(default = True)
    created_time = models.DateTimeField(auto_now_add = True)
    modified_time = models.DateTimeField(auto_now = True)
    added_by = models.ForeignKey(User, on_delete = models.CASCADE)

    class Meta:
        abstract = True


class Product(BaseModel):
    CATEGORY_CHOICES = (
        ('Mobile Phone','Mobile Phone'),
        ('Tablet','Tablet'),
        ('Watch','Watch'),
        ('Headphone','Headphone'),
        ('Speaker','Speaker')
    )
    name = models.CharField(max_length = 100)
    description = models.TextField()
    brand = models.CharField(max_length = 50)
    category = models.CharField(max_length = 15,choices = CATEGORY_CHOICES)
    price = models.DecimalField(max_digits = 7, decimal_places = 2)
    stock = models.IntegerField(default = 0)
    avg_rating = models.DecimalField(max_digits = 2, decimal_places = 1)
    rating_count = models.IntegerField(default = 0)

class ProductImage(BaseModel):
    path = models.ImageField(upload_to = 'images/product')
    is_main = models.BooleanField(default = False)
    product = models.ForeignKey(Product, on_delete = models.CASCADE)


class Review(BaseModel):
    product = models.ForeignKey(Product, on_delete = models.CASCADE, related_name = 'product_rating')
    rating = models.IntegerField()
    heading = models.CharField(max_length = 100, null = True, blank = True)
    description = models.TextField(null = True, blank = True)
    helpful_count = models.IntegerField(null = True, blank = True)


class Order(BaseModel):
    payment_type = models.CharField(max_length = 100)
    tax = models.DecimalField(max_digits = 7, decimal_places = 2)
    shipping_charge = models.DecimalField(max_digits = 7, decimal_places = 2)
    total = models.DecimalField(max_digits = 7, decimal_places = 2)
    is_paid = models.BooleanField(default = False)
    paid_at = models.DateTimeField(blank = True, null = True)
    order_confirmed = models.BooleanField(default = False)
    order_confirmed_at = models.DateTimeField(blank = True, null = True)
    delivered = models.BooleanField(default = False)
    delivered_at = models.DateTimeField(blank = True, null = True)


class CartItem(BaseModel):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    order = models.ForeignKey(Order, on_delete = models.CASCADE)
    price = models.DecimalField(max_digits = 7, decimal_places = 2)
    quantity = models.IntegerField(default = 0)

    
class ShippingAddress(BaseModel):
    order = models.ForeignKey(Order, on_delete = models.CASCADE)
    address = models.TextField()
    city = models.CharField(max_length = 100)
    postal_code = models.CharField(max_length = 50)
    shipping_price = models.DecimalField(max_digits = 7, decimal_places = 2)