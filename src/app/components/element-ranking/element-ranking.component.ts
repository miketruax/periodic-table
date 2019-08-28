import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { PeriodicElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'element-ranking-component',
  templateUrl: './element-ranking.component.html',
  styleUrls: ['../../shared/styles/table.component.scss','./element-ranking.component.scss']
})
export class ElementRankingComponent implements OnInit{
  @Input() elements: Object[];
  @Input() style: string;
  @Output() closeRanking = new EventEmitter();
  columns: any;
  displayedColumns: string[];
  constructor(){
  }

  rankHeader() {
    return this.style.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  }
  ngOnInit(){
    let propName = this.style == 'yearDiscovered' ? 'basicProperties' : 'abundances';
    let header = this.style == 'yearDiscovered' ? 'Year' : '% By Mass';

    this.columns = [
      { columnDef: `${propName}.${this.style}Rank`,    header: 'No.', cell: (row: PeriodicElement) => `${row[propName][this.style+'Rank']}`        },
      // { columnDef: 'basicProperties.symbol',  header: 'Symbol', cell: (row: PeriodicElement) => `${row.basicProperties.symbol}` },
      { columnDef: 'basicProperties.name',  header: 'Name', cell: (row: PeriodicElement) => `${row.basicProperties.name}` },
      { columnDef: `${propName}.${this.style}`,  header: header, cell: (row: PeriodicElement) => `${row[propName][this.style]}` }
    ];
    
    /** Column definitions in order */
    this.displayedColumns = this.columns.map(x => x.columnDef);
  }
}

