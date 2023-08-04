import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      name: new FormControl(this.product.productName, [
        Validators.required,
        Validators.minLength(3)
      ]),
      image: new FormControl(this.product.productImageURL),
      price: new FormControl(this.product.productPrice, [
        Validators.required,
        Validators.min(0.1)
      ]),
      description: new FormControl(this.product.productDescription, [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSubmit(product: Product): void {
    let prod: Product = product;

    prod.productName = this.productForm.value.name;
    prod.productImageURL = this.productForm.value.image;
    prod.productPrice = this.productForm.value.price;
    prod.productDescription = this.productForm.value.description;

    this.submit.emit(prod);
  }
}
