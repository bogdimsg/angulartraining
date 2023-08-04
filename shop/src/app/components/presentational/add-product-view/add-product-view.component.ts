import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProduct } from 'src/app/modules/shared/types/add-product.types';

@Component({
  selector: 'app-add-product-view',
  templateUrl: './add-product-view.component.html',
  styleUrls: ['./add-product-view.component.scss']
})
export class AddProductViewComponent {
  @Output() submit = new EventEmitter();
  productForm!: FormGroup;

  constructor () {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      image: new FormControl(''),
      price: new FormControl('', [
        Validators.required,
        Validators.min(0.1)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSubmit(): void {
    // making the product
    let prod: AddProduct = {
      categoryID: 'aaeff640-36d0-49c5-8a3e-52d96426f945',
      productWeight: 3,
      productName: this.productForm.value.name,
      productImageURL: this.productForm.value.image,
      productPrice: this.productForm.value.price,
      productDescription: this.productForm.value.description
    };

    // this.productForm.reset();
    this.submit.emit(prod);
  }
}
