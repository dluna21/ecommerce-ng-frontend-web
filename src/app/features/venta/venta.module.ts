import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { BusquedaComponent } from './page/venta-producto/busqueda/busqueda.component';
import { ListadoProductosComponent } from './page/venta-producto/listado-productos/listado-productos.component';
import { MainVentaProductoComponent } from './page/venta-producto/main-venta-producto/main-venta-producto.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutPrincipalComponent } from './layout/layout-principal/layout-principal.component';
import { MainDetalleComponent } from './page/venta-producto-detalle/main-detalle/main-detalle.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { VentaProductoDetalleTailwindComponent } from './page/venta-producto-detalle-tailwind/venta-producto-detalle-tailwind.component';
import { MainVentaTailwindComponent } from './page/main-venta-tailwind/main-venta-tailwind.component';
import { GridComponent } from './test/grid/grid.component';
import { PaginacionComponent } from './test/paginacion/paginacion.component';
import { MenuLeftComponent } from './layout/menu-left/menu-left.component';


@NgModule({
  declarations: [
    BusquedaComponent,
    ListadoProductosComponent,
    MainVentaProductoComponent,
    MainDetalleComponent,
    LayoutPrincipalComponent,
    HeaderComponent,
    FooterComponent,
    VentaProductoDetalleTailwindComponent,
    MainVentaTailwindComponent,
    GridComponent,
    PaginacionComponent,
    MenuLeftComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VentaRoutingModule,
    NgbModule,
    SharedModule,
    NgOptimizedImage
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class VentaModule { }
