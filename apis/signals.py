from django.db.models.signals import pre_save,post_save
from django.dispatch import receiver
from .models import Product, Review


@receiver(post_save, sender=Review)
def update_avg_raitng(sender, instance, created, **kwargs):
    print(sender, instance, created)
    