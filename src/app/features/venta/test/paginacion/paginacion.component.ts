import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginaModel } from './models/pagina.model';
import { PaginaResumenModel } from './models/pagina-resumen.model';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit{
  @Input()
  totalPaginas: number = 0;

  totalPaginasParciales: number = 1;
  PaginaParcial: number = 1;
  residuoPagina: number = 0;

  maximoTotalPaginas: number = 10;
  MostrarPuntosSiguiente: boolean = false;
  MostrarPuntosAtras: boolean = false;
  existeMasPaginasdeMaximo : boolean = false;
  mapeoPagina: Map<number,number> = new Map();

  @Input()
  tamanioPagina : number = 0;

  @Input()
  total: number = 0;

  nroPagina: number = 1;

  @Output()
  CargarNroPagina = new EventEmitter<number>();
  //Componente: ListaPagina
  listaPagina: Array<PaginaModel> = [];

  //Componente: Pagina resumen
  paginaResumen: PaginaResumenModel | undefined;

  ngOnInit(): void
  {
    this.cargarListaPaginacion(this.totalPaginas);

    this.paginaResumen = new PaginaResumenModel(this.nroPagina,this.tamanioPagina,this.totalPaginas,this.total);
  }

  cargarListaPaginacion(totalPaginas:number){
    this.existeMasPaginasdeMaximo = totalPaginas > this.maximoTotalPaginas;

    if(this.existeMasPaginasdeMaximo){
      this.residuoPagina = totalPaginas%this.maximoTotalPaginas;
      this.totalPaginasParciales =  Math.trunc(totalPaginas/this.maximoTotalPaginas) +  ((this.residuoPagina)>0 ? 1: 0);
    }

    let tamanio = this.existeMasPaginasdeMaximo ? this.maximoTotalPaginas : totalPaginas;

    for(let i = 1; i <= tamanio; i++ ){

      this.listaPagina.push
      (
        new PaginaModel(i,this.nroPagina)
      );
    }

    //Mapeamos las paginas con su pagina parcial.
    for(let j = 1; j <= this.totalPaginasParciales; j++){
      if(this.existeMasPaginasdeMaximo){
        let inicio = 1+(j-1)*this.maximoTotalPaginas;

        let fin = 0;
        if(j == this.totalPaginasParciales){
          fin = totalPaginas;
        }else{
          fin = j*this.maximoTotalPaginas;
        }

        for(let k = inicio; k <= fin; k++){
          this.mapeoPagina.set(k,j);
        }
      }else{
        for(let k = 1; k <= totalPaginas; k++){
          this.mapeoPagina.set(k,j);
        }
      }

    }

    this.MostrarPuntosSiguiente = this.existeMasPaginasdeMaximo;

  }
  cargarListaPaginacionxPagina(nroPagina:number,totalPaginas:number){

    var nroPaginaParcialNew = this.mapeoPagina.get(nroPagina);

    if(nroPaginaParcialNew != undefined){

      if(nroPaginaParcialNew !== this.totalPaginasParciales){

        if(nroPaginaParcialNew !== this.PaginaParcial){
          this.listaPagina = [];
          let inicio = 1 + (nroPaginaParcialNew - 1)*this.maximoTotalPaginas;
          let fin = (nroPaginaParcialNew)*this.maximoTotalPaginas;

          for(let i = inicio; i <= fin; i++){
            this.listaPagina.push
            (
              new PaginaModel(i,nroPagina)
            );
          }
        }

      }else{
        if(nroPaginaParcialNew == this.totalPaginasParciales){

          this.listaPagina = [];
          let inicio = totalPaginas - this.maximoTotalPaginas + this.residuoPagina;

          let fin =  totalPaginas;

          for(let i = inicio; i <= fin; i++){
            this.listaPagina.push
            (
              new PaginaModel(i,nroPagina)
            );
          }

        }
      }

      this.PaginaParcial = nroPaginaParcialNew;

    }
  }

  CambiarPagina(numero:number){
    this.nroPagina = numero;
    this.paginaResumen?.actualizar(numero,this.tamanioPagina,this.totalPaginas,this.total);
    this.listaPagina.forEach( item => {
      item.actualizar(item.numero,this.nroPagina);
    });

    this.CargarNroPagina.emit(this.nroPagina);
  }

  Mover(evento:string){
    switch(evento)
    {
      case "Inicio":
        if(this.nroPagina != 1)
        {
          this.CambiarPagina(1);
        }
      break;
      case "Siguiente":
        var nextNroPagina = this.nroPagina +1;
        if(nextNroPagina !== this.totalPaginas+1){
          this.CambiarPagina(nextNroPagina);
        }

      break;
      case "Atras":
        var backNroPagina = this.nroPagina - 1;
        if(backNroPagina !== 0){
          this.CambiarPagina(backNroPagina);
        }
      break;
      case "Ultimo":
        if(this.nroPagina != this.totalPaginas)
        {
          this.CambiarPagina(this.totalPaginas);
        }

      break;
    }

    this.cargarListaPaginacionxPagina(this.nroPagina,this.totalPaginas);
  }
}
