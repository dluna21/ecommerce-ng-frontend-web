import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CarouselModel } from 'src/app/core/models/carousel.model';
import { EspecificacionModel } from 'src/app/core/models/especificacion.model';

@Component({
  selector: 'app-main-detalle',
  templateUrl: './main-detalle.component.html',
  styleUrls: ['./main-detalle.component.css']
})
export class MainDetalleComponent implements OnInit, AfterViewInit {
  @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;
  @ViewChildren('carouselItemMini') carouselItemsMini!: QueryList<ElementRef>;
  // @ViewChildren('inputSpinner') inputSpinner!: HTMLInputElement;
  inputSpinner:string = "1";
  currentIndex = 0;
  intervalTime = 5000; // Cambiar

  _header_list_carousel = Array<CarouselModel>();

  listaEspecificacion = Array<EspecificacionModel>();

  tituloEspecificacion:string = "Especificaciones";
  tituloInformacionProducto:string = "Información del Producto";

  ngOnInit(): void {
    const prod1:CarouselModel = { posicion:0, nombre:"1", precio:"S./ 15", urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_StdRfQujUAhwtPUghfig119ykwlb8YQLA&usqp=CAU"};
    const prod2:CarouselModel = { posicion:1,nombre:"2", precio:"S./ 35", urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKa4Peo-bFs5Hyrq6Xuf_aMsd5JWOKc7OWg&usqp=CAU"};
    const prod3:CarouselModel = { posicion:2,nombre:"3", precio:"S./ 25", urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo4-fJ7l-cpJe_YlCwopSZLpIp-dDrc6M4w&usqp=CAU"};
    this._header_list_carousel.push(prod1);
    this._header_list_carousel.push(prod2);
    this._header_list_carousel.push(prod3);

    this.listaEspecificacion.push({type:"tipo 1", name:"name 1"});
    this.listaEspecificacion.push({type:"tipo 2", name:"name 2"})
    this.listaEspecificacion.push({type:"tipo 3", name:"name 3"})
    this.listaEspecificacion.push({type:"tipo 4", name:"name 4"})
  }
  ngAfterViewInit() {
    this.carouselItems.toArray()[this.currentIndex].nativeElement.classList.add('active');
    // this.carouselItemsMini.toArray()[this.currentIndex].nativeElement.classList.add('active');
    // setInterval(() => this.nextItem(), this.intervalTime);
  }
  nextItem() {
    console.log('cambio de imagen');
    const items = this.carouselItems.toArray();
    items[this.currentIndex].nativeElement.classList.remove('active');
    this.currentIndex = (this.currentIndex + 1) % items.length;

    items[this.currentIndex].nativeElement.classList.add('active');
  }

  btn_SelecItem(item:CarouselModel){
    var length = this._header_list_carousel.length;
    const items = this.carouselItems.toArray();
    items[this.currentIndex].nativeElement.classList.remove('active');

    let indexMover:number = item.posicion;

    items[indexMover].nativeElement.classList.add('active');
    this.currentIndex = indexMover;
  }
  btn_nextItem() {

    this.moverSlice(this.currentIndex,"back");
  }
  btn_prevItem() {

    this.moverSlice(this.currentIndex,'next');
  }
  moverSlice(index:number, action:string){

    var length = this._header_list_carousel.length;
    const items = this.carouselItems.toArray();
    items[index].nativeElement.classList.remove('active');

    let indexMover:number = 0;
    if(action == "next"){
      indexMover = (this.currentIndex == 0 ? (length-1): this.currentIndex - 1) ;
    }
    if(action == "back"){
      indexMover = (this.currentIndex == (length-1) ? 0: this.currentIndex + 1) ;
    }
    if(action == "front"){
      indexMover = this.currentIndex;
    }

    items[indexMover].nativeElement.classList.add('active');
    this.currentIndex = indexMover;
    // console.log('this.currentIndex------>',this.currentIndex);
  }

   //Spinner
   add(){
    var input = this.inputSpinner ?? "0";
    if(input == "" || input == undefined){
      input = "0";
    }
    var newInput = parseInt(input) + 1;
    this.inputSpinner = newInput.toString();
    console.log(this.inputSpinner);
   }

}
