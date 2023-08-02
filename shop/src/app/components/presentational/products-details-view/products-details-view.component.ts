import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input() product: Observable<Product> | undefined;
}
