import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'element-component',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  title = 'Dat Periodic Table Tho';

@Input() element: Object;
@Input() year: number;
@Output() more: EventEmitter<any> = new EventEmitter();

showMore(num: number){
  this.more.emit(num);
}
}
