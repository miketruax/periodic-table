import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'element-info-component',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.scss']
})
export class ElementInfoComponent {
  @Input() element: Object;
  @Input() moreInfo: Object;
  @Output() showMore = new EventEmitter();

}
