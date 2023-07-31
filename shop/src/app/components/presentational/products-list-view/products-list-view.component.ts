import { Component, Input } from '@angular/core';
import { ProductDetails } from 'src/app/modules/shared/types/product-details.types';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { getProductDetailsMock } from 'src/app/mocks/products.mocks';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})

export class ProductsListViewComponent {
  @Input() productList: ProductDetails[] | undefined;

  products: Observable<ProductDetails>;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const productID = this.route.snapshot.paramMap.get('id');
    this.products = getProductDetailsMock("product" + productID);
  }
}

export function addItemToCart(product: ProductDetails){
  ;
}
