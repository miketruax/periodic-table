import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { PeriodicElement } from 'src/app/interfaces/element.interface';
import { ElementService } from 'src/app/services/element.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'element-ranking-component',
  templateUrl: './element-ranking.component.html',
  styleUrls: ['../../shared/styles/table.component.scss','./element-ranking.component.scss']
})
export class ElementRankingComponent implements OnInit{
  style: string;
  elements: Array<PeriodicElement>
  columns: any;
  displayedColumns: string[];
  constructor(private elementService: ElementService, private activatedRoute: ActivatedRoute){
  }
  
  ngOnInit(){
    this.style = this.activatedRoute.snapshot.params.type;
    this.elements = this.elementService.rankedElements(this.style);
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

