import { Component, OnInit, signal } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ProductModel } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [NgbPaginationConfig]
})
export class GridComponent implements OnInit {
  totalItems: number = 0;
  page: number = 1;
  previousPage: number = 0;
  showPagination: boolean = true;

  @BlockUI() blockUI!: NgBlockUI;
  listProduct = signal<Array<ProductModel>>([]);
  constructor( private dataService:DataService,
    private config: NgbPaginationConfig,){
      this.config.boundaryLinks = true;
  }

  ngOnInit(): void {
    this.page =1;
    this.previousPage =1;

    this.blockUI.start();
    this.dataService.getDataTest().subscribe( data => {
      console.log(data);
      this.listProduct.set(data);
      this.blockUI.stop();
    });
  }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.dataService.getDataTest().subscribe( data => {
        console.log(data);
        this.listProduct.set(data);
        this.blockUI.stop();
      });
    }
  }

  CargarDatos(nroPagina:number){
    this.blockUI.start();
    console.log("Nro de pagina seleccionada en el hijo --->",nroPagina);
    var limit = nroPagina*25;
      this.dataService.getDataTestxNumero(limit).subscribe( data => {
        console.log(data);
        this.listProduct.set(data);
        this.blockUI.stop();
      });
  }
}
