
from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    # Это поле теперь и читает, и записывает. 
    # Оно берет данные из ключа 'categoryId' в JSON и сохраняет их в поле 'category' модели.
    categoryId = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category'
    )

    class Meta:
        model = Product
        # Перечисляем все поля, которые будут участвовать в обмене данными
        fields = (
            'id', 
            'name', 
            'description', 
            'price', 
            'rating', 
            'likes', 
            'images', 
            'link', 
            'categoryId'
        )

    def to_representation(self, instance):
        """
        Этот метод нужен, чтобы при GET запросе мы видели ID категории, 
        даже если в модели поле называется просто category.
        """
        representation = super().to_representation(instance)
        # Если вдруг по какой-то причине categoryId не подтянулся, 
        # мы гарантируем его наличие в ответе
        if instance.category:
            representation['categoryId'] = instance.category.id
        return representation