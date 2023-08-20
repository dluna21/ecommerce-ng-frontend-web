import { Component, OnInit, signal } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ProductModel } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';
import {
  Offcanvas,
  Collapse,
  Dropdown,
  Ripple,
  initTE,
  Sidenav,
} from "tw-elements";

@Component({
  selector: 'app-main-venta-tailwind',
  templateUrl: './main-venta-tailwind.component.html',
  styleUrls: ['./main-venta-tailwind.component.css']
})

export class MainVentaTailwindComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  listProduct = signal<Array<ProductModel>>([]);
  constructor( private dataService:DataService){

  }

  ngOnInit(): void {
    initTE({Sidenav, Offcanvas,Collapse,Dropdown,Ripple });
    this.blockUI.start();
    this.dataService.getDataTest().subscribe( data => {
      console.log(data);
      this.listProduct.set(data);
      this.blockUI.stop();
    });
  }

}
