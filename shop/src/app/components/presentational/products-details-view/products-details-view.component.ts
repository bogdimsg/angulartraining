import { Component, Input } from '@angular/core';
import { ProductDetails } from 'src/app/types/product.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input() product: ProductDetails | undefined;
}
