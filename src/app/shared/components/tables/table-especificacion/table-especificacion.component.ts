import { Component, Input, OnInit } from '@angular/core';
import { EspecificacionModel } from 'src/app/core/models/especificacion.model';

@Component({

  selector: 'app-table-especificacion',
  templateUrl: './table-especificacion.component.html',
  styleUrls: ['./table-especificacion.component.css']
})
export class TableEspecificacionComponent implements OnInit{

  @Input() lista: Array<EspecificacionModel> = new  Array<EspecificacionModel>();
  @Input() titulo!:string;

  tempTitle!:string;
  ngOnInit(): void {
    console.log(this.lista);
  }
}
