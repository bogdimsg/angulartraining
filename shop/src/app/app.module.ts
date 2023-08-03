import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/products-details-view/products-details-view.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { HttpClientModule } from '@angular/common/http';
import { BadRouteComponent } from './components/bad-route/bad-route.component';
import { AddProductComponent } from './components/containers/add-product/add-product.component';
import { AddProductViewComponent } from './components/presentational/add-product-view/add-product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
    BadRouteComponent,
    AddProductComponent,
    AddProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
