import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  moreInfo: boolean = false;
  counter: any;
  elements: Object[];
  selectedElement: Object = {};
  year: number = 2017;
  constructor(){
    this.elements = require('../../assets/elem_v3.json');
  }
  seeAll(){
    this.year = -3000;
    this.counter = setInterval( ()=>{
      this.year = this.year+1;
      if(this.year == 2017){
        clearInterval(this.counter);
      }
    }, 50);
  }
  changeYear(){
    clearInterval(this.counter);
  }
  showMore(e:Object){
    this.moreInfo = !this.moreInfo;
    this.selectedElement = e;
  }
}
