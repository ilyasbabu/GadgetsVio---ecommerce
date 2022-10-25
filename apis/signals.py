from django.db.models.signals import pre_save,post_save
from django.dispatch import receiver
from .models import Review
from django.db.models import Avg


@receiver(post_save, sender=Review)
def update_avg_raitng(sender, instance, created, **kwargs):
    product_instance = instance.product
    reviews = Review.objects.filter(product = product_instance, is_active = True)
    avg_rating = reviews.aggregate(Avg('rating'))['rating__avg']
    rating_count = reviews.count()
    product_instance.avg_rating = avg_rating
    product_instance.rating_count = rating_count
    product_instance.save()