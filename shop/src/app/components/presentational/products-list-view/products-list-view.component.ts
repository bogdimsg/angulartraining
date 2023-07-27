import { Component, Input } from '@angular/core';
import { ProductDetails } from 'src/app/types/product.types';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})
export class ProductsListViewComponent {
  @Input() productList: ProductDetails[] | undefined;
}
