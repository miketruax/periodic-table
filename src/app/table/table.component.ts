import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  counter: any;
  elements: Object[];
  selectedElement: Object;
  year: number = 2017;
  constructor(){
    this.elements = require('../../assets/elements.json');
  }
  seeAll(){
    this.year = 1667;
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
  showMore(v:number){
    this.selectedElement = this.elements[v];
  }
}
