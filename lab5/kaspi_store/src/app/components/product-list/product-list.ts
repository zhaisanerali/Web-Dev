import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnChanges {
  // Получаем массив товаров от родителя
  products = input.required<Product[]>();

  // Локальный список для управления удалением
  displayProducts: Product[] = [];

  // Следим за изменением входных данных
  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.displayProducts = [...this.products()];
    }
  }
  
  // Также добавим метод для обработки изменений при использовании signals
  constructor() {
    // Альтернативный способ отслеживания изменений signals
  }

  onRemoveProduct(id: number) {
    this.displayProducts = this.displayProducts.filter(p => p.id !== id);
  }
}