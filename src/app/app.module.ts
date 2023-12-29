import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contact/dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailComponent,
    ContactComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Formularios de tipo plantilla
    ReactiveFormsModule // Formularios de tipo reactivo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
