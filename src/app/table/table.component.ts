import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  moreInfo: boolean = false;
  style: string = "classic";
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

  getSorted(e,r){
    switch (r){
      case ('crustAbundance'):
        return e['abundances']["crust abundance"].split('(rank')[0];
      case ('humanAbundance'):
        return e['abundances']["human abundance"].split('(rank')[0];
      case ('universeAbundance'):
        return e['abundances']["universe abundance"].split('(rank')[0];

      default:
        return;
    }

  }
}
