import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Добавь это!

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // И добавь сюда
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}