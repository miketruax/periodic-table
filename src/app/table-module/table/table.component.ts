import {Component, OnInit} from '@angular/core';
import elements from "./elem_v3";
import { PeriodicElement } from '../interfaces/element.interface';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['../shared/styles/table.component.scss']
})
export class TableComponent implements OnInit {
  moreInfo: boolean = false;
  showRanking: boolean = false;
  style: string = "classic";
  elements: Object[];
  elementYears: number[] = [];
  year: number = -10000;
  selectedElement: Object = {};
  box: Object = {el: {}, top: '', left: ''};
  transitionStyle: string;



  constructor() {
    this.elements =  elements;
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
  ngOnInit() {
  }
}
