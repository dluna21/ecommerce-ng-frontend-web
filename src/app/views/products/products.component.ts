import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, async, filter, map, of, single, tap } from 'rxjs';
import { ProductModel } from 'src/app/core/models/product.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;

  constructor(private dataService:DataService){}

  listProduct = signal<Array<ProductModel>>([]);
  textSearch:string = "";

  product$ = new Observable<ProductModel | undefined>;
  listNumero = Array<number>();

  ngOnInit(): void {
    this.blockUI.start();
    this.listNumero.push(1);
    this.listNumero.push(2);
    this.listNumero.push(3);
    this.listNumero.push(4);

    of(2,3,4,5,6,7).pipe(
      filter( (val:number) => val % 2 === 0)
    )

    this.dataService.getDataTest().subscribe( data => {
      this.listProduct.set(data);
      this.blockUI.stop();
    });
  }

  preViewProduct(id:number){

    this.product$ = of(this.listProduct()).pipe(
      map( list=>{
        return list.find( item => item.id == id );
      }),
      tap( product => console.log(product))
    );
  }

  searchProduct(){
    console.log(this.textSearch);
  }
}

