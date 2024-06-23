export class PaginaModel{
  numero:number = 0;
  activo:boolean = false;

  constructor(numero:number, pagina:number){
    this.actualizar(numero,pagina);
  }

  actualizar(numero:number, pagina:number){
    this.numero = numero;
    this.activo = (numero == pagina);
  }
}
