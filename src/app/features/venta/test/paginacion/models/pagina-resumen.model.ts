export class PaginaResumenModel{
  inicio:number = 0;
  fin:number = 0;
  total:number = 0;

  constructor(nroPagina:number,tamanioPagina:number,totalPagina:number,total:number){
    this.actualizar(nroPagina,tamanioPagina,totalPagina,total);
  }

  actualizar(nroPagina:number,tamanioPagina:number,totalPagina:number,total:number){
    if(nroPagina == 1){
      this.inicio = 1;
      this.fin = tamanioPagina;
    }else{
      this.inicio = (nroPagina-1)*tamanioPagina;
      if(nroPagina == totalPagina){
        this.fin = total;
      }else{
        this.fin = (nroPagina)*tamanioPagina;
      }
    }
    this.total = total;
  }
}
