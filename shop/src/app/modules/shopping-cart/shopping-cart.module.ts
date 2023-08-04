import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDetailsComponent } from './components/containers/shopping-cart-details/shopping-cart-details.component';
import { ShoppingCartDetailsViewComponent } from './components/presentational/shopping-cart-details-view/shopping-cart-details-view.component';
import { IconButtonComponent } from '../shared/icon-button/icon-button.component';

@NgModule({
  declarations: [
    ShoppingCartDetailsComponent,
    ShoppingCartDetailsViewComponent
  ],
  exports: [
    ShoppingCartDetailsComponent,
    ShoppingCartDetailsViewComponent
  ],
  imports: [
    CommonModule,
    IconButtonComponent
  ]
})
export class ShoppingCartModule { }
