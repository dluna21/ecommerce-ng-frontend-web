import { Component, Input, OnInit } from '@angular/core';

@Component({

  selector: 'app-titulo-subrayado',
  templateUrl: './titulo-subrayado.component.html',
  styleUrls: ['./titulo-subrayado.component.css']
})
export class TituloSubrayadoComponent implements OnInit{

  @Input() titulo!:string;
  @Input() colorLine!:string;
  @Input() fontFamily!:string;
  @Input() fontBold!:string;
  @Input() fontSize!:string;

  style1!:string;
  style2!:string;

  ngOnInit(): void {
    this.style1 = this.getStyle();
    this.style2 = this.getStyleLine();
  }
  getStyle(){
    var style =  `font-family: ${this.fontFamily};
                  font-weight: ${this.fontBold};
                  font-size: ${this.fontSize};`;
    return style;
  }

  getStyleLine(){
    var style =  `border: 1px solid #FF6200;`
    return style;
  }

}
