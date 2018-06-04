import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Input} from "@angular/compiler/src/core";

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  elements: Object[];
  selectedElement: Object = {};
  currYear: number;
  year: number;
  elementYears: number[] = [];
  octicons: any = require('octicons');
  box: Object = {el: {}, top: '', left: ''};
  transitionStyle: string;
  timer: any = false;


  constructor(private sanitizer: DomSanitizer) {
    this.elements = require('../assets/elem_v3.json');
    this.currYear = new Date().getFullYear();
    this.year = -10000;
    this.elements.forEach((v, i) =>{
      this.elementYears.push(v['basic properties']['year discovered']);
    });
    this.elementYears.sort((a,b)=>{
      return a-b;
    });
  }


  clearTimer(){
    clearInterval(this.timer);
    this.timer = false;
  }


  changeStyle(style){
    this.transitionStyle = style;
  }

  setStyle(s: string) {
    this.clearTimer();
    this.year = -10000;
    this.style = s;
  }

  resetYears(){
    this.year = -10000;
    this.clearTimer();
  }

  jumpYear(val: number){
    this.clearTimer()
    if (val === -1){
      let currentIndex = this.elementYears.indexOf(this.year);
      this.year = currentIndex === 0 ? this.year : this.elementYears[currentIndex -1];
    }
    if (val === 1){
      let currentIndex = this.elementYears.lastIndexOf(this.year);
      this.year = currentIndex === (this.elementYears.length-1) ? this.year : this.elementYears[currentIndex + 1];
    }
  }

  cycleYears(){
    let current = this.elementYears.lastIndexOf(this.year);
    if(current == this.elementYears.length -1){
      this.clearTimer()
    }
    else{
      this.year = this.elementYears[current +1];
      return false

    }
  }

  playYear(bool: boolean){
    if(bool && this.timer){
      return;
    }
    if(bool){
      this.timer = setInterval(this.cycleYears.bind(this), 250)
    }
    else{
      this.clearTimer()
    }
  }




  //Showing and Hiding more info section
  hideMore(e) {
    this.transitionStyle = 'infoOut';
    setTimeout(() => {
      this.transitionStyle = 'infoIn startMoreInfoOut'
    }, 250);
    setTimeout(() => {
      this.transitionStyle = 'infoIn endMoreInfoOut';
    }, 950);
    setTimeout(() => {
      this.transitionStyle = '';
      this.selectedElement = {};
      this.moreInfo = !this.moreInfo
    }, 1600)
  }


  showMore(element: Object, event: any) {
    if (this.moreInfo == true) {
      return;
    }
    this.clearTimer();
    window.scrollTo(0, 0);
    this.selectedElement = element;
    this.box['el'] = event.target.hasOwnProperty('id') ? event.target : event.target.parentElement;
    this.box['top'] = `${this.box['el'].getBoundingClientRect().top - 35}px`;
    this.box['left'] = this.box['el'].getBoundingClientRect().left + 'px';
    this.moreInfo = !this.moreInfo;
    this.transitionStyle = 'infoIn';
    setTimeout(() => {
      this.transitionStyle = 'infoIn startMoreInfoIn'
    }, 50);
    setTimeout(() => {
      this.transitionStyle = 'infoIn endMoreInfoIn'
    }, 650);
  }

  //Showing and Hiding Rank Table

  showRankTable() {
    window.scrollTo(0,0);
    this.transitionStyle = 'rankingIn';
    this.showRanking = !this.showRanking;
    setTimeout(() => {
      this.transitionStyle = 'rankingIn startRankingIn'
    }, 150);

    setTimeout(() => {
      this.transitionStyle = 'rankingIn endRankingIn'
    }, 250);

  }

  hideRankTable(){
    window.scrollTo(0,0);
    this.transitionStyle = 'rankingOut';
    setTimeout(()=>{
      this.transitionStyle = 'rankingOut startRankingOut';
    }, 150);
    setTimeout(()=>{
      this.transitionStyle = 'rankingOut endRankingOut';
    }, 500);
    setTimeout(()=>{
      this.transitionStyle = '';
      this.showRanking = !this.showRanking;
    }, 900);

  }

  iconBuilder<SafeHtml>(value: string, msg: string='', span: boolean = false, size: number=27.5){


    return this.sanitizer.bypassSecurityTrustHtml(this.octicons[value].toSVG({
      height: size,
      width: size,
      "class": "svgIcon"
    }) + `<${!span ? 'p' : 'span'} class='iconDescription'>${msg}</${!span ? 'p' : 'span'}>`)
}

  ngOnInit() {
  }
}
