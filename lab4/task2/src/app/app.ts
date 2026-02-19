import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list'; // проверь путь!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Добавь его сюда
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'online-store';
}