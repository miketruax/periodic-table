import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  elements: Object[];
  selectedElement: Object;
  year: number = 2017;
  constructor(){
    this.elements = require('../../assets/elements.json');
  }

  changeYear(e){
    console.log(e);
  }
  showMore(v:number){
    this.selectedElement = this.elements[v];
  }
}
