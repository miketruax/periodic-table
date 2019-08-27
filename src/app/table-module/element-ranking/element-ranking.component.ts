import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'element-ranking-component',
  templateUrl: './element-ranking.component.html',
  styleUrls: ['../shared/styles/table.component.scss','./element-ranking.component.scss']
})
export class ElementRankingComponent {
  @Input() elements: Object[];
  @Input() style: string;
  @Output() closeRanking = new EventEmitter();
  displayedColumns: string[] = ["position", "'basic properties'['name']", "'basic properties'['atomic mass']", "weight", "symbol"];
  constructor(){
  }

  rankHeader() {
    return this.style.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  }
}

