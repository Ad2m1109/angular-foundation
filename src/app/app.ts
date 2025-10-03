import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./products/products";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Products],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_foundations');
  constructor() {
    console.log("hi there!");
  }
}
