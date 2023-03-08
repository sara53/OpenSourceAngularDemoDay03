import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() myProduct: Iproduct | null = null;
  myDate: any;

  constructor() {
    this.myDate = new Date();
  }
}
