import { Component } from '@angular/core';
import { productsList } from 'src/app/models/productsList';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Iproduct[] = productsList;
}
