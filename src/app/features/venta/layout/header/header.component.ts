import { Component, OnInit } from '@angular/core';
import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
    initTE({ Collapse, Dropdown });
  }

  searchProduct(){

  }
}
