import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainVentaProductoComponent } from './page/venta-producto/main-venta-producto/main-venta-producto.component';
import { MainDetalleComponent } from './page/venta-producto-detalle/main-detalle/main-detalle.component';
import { VentaProductoDetalleTailwindComponent } from './page/venta-producto-detalle-tailwind/venta-producto-detalle-tailwind.component';
import { MainVentaTailwindComponent } from './page/main-venta-tailwind/main-venta-tailwind.component';
import { TestComponentsComponent } from './test-components/test-components.component';
import { GridComponent } from './test/grid/grid.component';


const childRoutes: Routes = [
  {
    path: 'listado-producto',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],
    component: MainVentaProductoComponent
  },
  {
    path: 'listado-producto-tailwind',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],
    component: MainVentaTailwindComponent
  },
  {
    path: 'test',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],
    component: TestComponentsComponent
  },{
    path: 'test-grid',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],

    component: GridComponent
  },
  {
    path: 'producto-detalle',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],
    component: MainDetalleComponent
  },
  {
    path: 'producto-detalle-tailwind',
    // canActivate: [PreseleccionadoGuard, CompletadaGuard,CierreGuard, SeccionesGuard],
    component: VentaProductoDetalleTailwindComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
