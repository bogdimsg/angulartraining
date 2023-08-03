import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.scss']
})
export class EditProductViewComponent {
  @Output() submit = new EventEmitter();
  product: Product = this.storage.selectedProduct;
  productForm!: FormGroup;

  constructor (private storage: StorageService) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.productName),
      // category: new FormControl(product.categoryName),
      image: new FormControl(this.product.productImageURL),
      price: new FormControl(this.product.productPrice),
      description: new FormControl(this.product.productDescription)
    });
  }

  fillForm(product: Product): boolean {
    this.productForm = new FormGroup({
      name: new FormControl(product.productName),
      // category: new FormControl(product.categoryName),
      image: new FormControl(product.productImageURL),
      price: new FormControl(product.productPrice),
      description: new FormControl(product.productDescription)
    });
    return true;
  }

  onSubmit(product: Product): void {
    let prod: Product = product;

    prod.productName = this.productForm.value.name;
    prod.productImageURL = this.productForm.value.image;
    prod.productPrice = this.productForm.value.price;
    prod.productDescription = this.productForm.value.description;

    // this.productForm.reset();
    this.submit.emit(prod);
  }
}
