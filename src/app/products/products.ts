import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  //name string contains adem
  name = 'adem';
  alert() {
    alert('hello ' + this.name);
  }
}
