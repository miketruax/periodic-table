import {Component, Input, Output, EventEmitter} from '@angular/core';
import { PeriodicElement } from 'src/app/interfaces/element.interface';
import { ElementService } from 'src/app/services/element.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'element-info-component',
  templateUrl: './element-info.component.html',
  styleUrls: ['../../shared/styles/table.component.scss','./element-info.component.scss']
})
export class ElementInfoComponent {
  element: PeriodicElement;

  constructor(private elementService: ElementService, private actr: ActivatedRoute){
  }
  // Keeps original order of keys for display
  keepOrder = (a, b) => {
    return a;
}
ngOnInit(){
  this.element = this.elementService.byName(this.actr.snapshot.params.element)
}
}
