import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloSubrayadoComponent } from './components/titles/titulo-subrayado/titulo-subrayado.component';
import { TableEspecificacionComponent } from './components/tables/table-especificacion/table-especificacion.component';



@NgModule({
  declarations: [
    TableEspecificacionComponent,
    TituloSubrayadoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[TableEspecificacionComponent,
    TituloSubrayadoComponent,]
})
export class SharedModule { }
