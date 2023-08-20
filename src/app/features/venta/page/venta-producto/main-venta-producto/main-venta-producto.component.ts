import { Component, OnInit, signal } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ProductModel } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';
import {
  Collapse,
  initTE,
} from "tw-elements";



@Component({
  selector: 'app-main-venta-producto',
  templateUrl: './main-venta-producto.component.html',
  styleUrls: ['./main-venta-producto.component.css']
})

export class MainVentaProductoComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;
  listProduct = signal<Array<ProductModel>>([]);
  constructor( private dataService:DataService){

  }

  ngOnInit(): void {
    initTE({ Collapse });
    this.blockUI.start();
    this.dataService.getDataTest().subscribe( data => {
      this.listProduct.set(data);
      this.blockUI.stop();
    });
  }

}
