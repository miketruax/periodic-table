import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'element-info-component',
  templateUrl: './element-info.component.html',
  styleUrls: ['../../shared/styles/table.component.scss','./element-info.component.scss']
})
export class ElementInfoComponent {
  @Input() element: Object;
  @Input() startTop: Object;
  @Input() startLeft: Object;
  @Output() hideMore = new EventEmitter();

  constructor(){
  }
}
