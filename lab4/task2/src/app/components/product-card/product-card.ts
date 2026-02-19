import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  // Этот декоратор позволяет передавать данные [product]="p" из списка
  @Input() product!: Product;

  share(platform: string) {
    const message = encodeURIComponent(`Посмотри на ${this.product.name}: ${this.product.link}`);
    if (platform === 'wa') {
      window.open(`https://wa.me/?text=${message}`, '_blank');
    } else if (platform === 'tg') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${message}`, '_blank');
    }
  }
}