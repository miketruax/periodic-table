import {Component, OnInit} from '@angular/core';
import { PeriodicElement } from '../../interfaces/element.interface';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['../../shared/styles/table.component.scss']
})
export class TableComponent implements OnInit {
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  elements: Array<PeriodicElement>;
  elementYears: number[] = [];
  year: number = -10000;
  box: Object = {el: {}, top: '', left: ''};
  transitionStyle: string;



  constructor(elementService: ElementService) {
    this.elements =  elementService.elements;
    this.elements.forEach((v:PeriodicElement, i) =>{
      this.elementYears.push(v.basicProperties.yearDiscovered);
    });
    this.elementYears.sort((a,b)=>{
      return a-b;
    });
  }

  setStyle(s: string) {
    this.style = s;
  }

  setYear(e){
    this.year = e;
  }

  ngOnInit() {
  }
}
