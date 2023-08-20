import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPrincipalComponent } from './layout/layout-principal/layout-principal.component';

const routes: Routes = [
  {
    path:'venta',
    component: LayoutPrincipalComponent,
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
