import {Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';


@Component({
  selector: 'year-controls-component',
  templateUrl: './year-controls.component.html',
  styleUrls: ['../../shared/styles/table.component.scss','./year-controls.component.scss']
})
export class YearControlsComponent implements OnDestroy{
  @Input() year: number;
  @Input() elementYears : number[];
  @Output() setYear = new EventEmitter();
  currYear: number;
  timer: any = false;

 constructor(){
   this.currYear = new Date().getFullYear();
 }


  clearTimer(){
    clearInterval(this.timer);
    this.timer = false;
  }

  jumpYear(val: number){
    this.clearTimer();
    if (val === -1){
      let currentIndex = this.elementYears.indexOf(this.year);
      this.setYear.emit(currentIndex === 0 ? this.year : this.elementYears[currentIndex -1]);
    }
    if (val === 1){
      let currentIndex = this.elementYears.lastIndexOf(this.year);
      this.setYear.emit(currentIndex === (this.elementYears.length-1) ? this.year : this.elementYears[currentIndex + 1]);
    }
  }

  cycleYears(){
    let current = this.elementYears.lastIndexOf(this.year);
    if(current == this.elementYears.length -1){
      this.clearTimer()
    }
    else{
      this.setYear.emit(this.elementYears[current +1]);
      return false

    }
  }

  playYear(){
    if(this.timer){
      return;
    }
    this.timer = setInterval(this.cycleYears.bind(this), 250);

  }

  resetYears(){
    this.clearTimer();
    this.setYear.emit(-10000);
  }

  formatYear(){
    return this.year >= 0 ? this.year+ ' CE' : Math.abs(this.year) + ' BCE';
  }

  ngOnDestroy(){
    this.clearTimer();
    this.resetYears();
  }
}
