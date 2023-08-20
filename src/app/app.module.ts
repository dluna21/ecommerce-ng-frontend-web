import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { VentaModule } from './features/venta/venta.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BlockUIModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VentaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
