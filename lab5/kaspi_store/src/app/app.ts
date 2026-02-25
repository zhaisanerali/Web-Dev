import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { products, categories } from './products'; // Убедись, что путь верный
import { Product, Category } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  categories = categories;
  allProducts = products;
  selectedCategory: Category | null = null;
  // Изначально пустой массив
  filteredProducts: Product[] = [];

  // Этот метод сработает сразу при запуске приложения
  ngOnInit() {
    this.filteredProducts = this.allProducts; 
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    // Фильтруем: оставляем только те, у которых categoryId совпадает с нажатой категорией
    this.filteredProducts = this.allProducts.filter((p: Product) => p.categoryId === category.id);
  }

  // Показать все товары
  showAllProducts() {
    this.selectedCategory = null;
    this.filteredProducts = this.allProducts;
  }
}