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


  discoveryShow(){
    this.style='discoveryYear';
    this.year = 0;
    this.counter = setInterval( ()=>{
      this.year += this.year < 1200 ? 50 : 5;
      if(this.year >= 2017){
        this.year = 2017;
        clearInterval(this.counter);
      }
    }, 50);
  }
  setStyle(s: string){
    this.year = 2017;
    clearInterval(this.counter);
    this.style = s;
  }
  showMore(e:Object){
    clearInterval(this.counter);
    this.year = 2017;
    window.scrollTo(0,0);
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
      case ('discoveryYear'):
        if(e['discoveryYear'] >0) {
          return e['discoveryYear'] + ' CE';
        }
        else{
          return Math.abs(e['discoveryYear'])+ ' BCE';
        }

      default:
        return;
    }

  }
}
