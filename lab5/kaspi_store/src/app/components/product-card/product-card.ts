import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule], // CommonModule уже включает number pipe
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  delete() {
    this.remove.emit(this.product().id);
  }

  share(platform: string) {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Check out this ${this.product().name} on Kaspi!`);
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`);
    } else {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`);
    }
  }
}