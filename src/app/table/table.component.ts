import { Component } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  moreInfo: boolean = false;
  style: string = "classic";
  counter: any;
  elements: Object[];
  selectedElement: Object = {};
  year: number = 2017;
  constructor(){
    this.elements = require('../../assets/elem_v3.json');
  }
  sortbyHumanAbundance(){
    let human =[];
    this.elements.forEach((val ,i, elements)=>{
      if(val["abundances"] && val["abundances"]["human abundance"]){
        let rank = parseInt(val["abundances"]["human abundance"].split('(rank: ')[1]);
        if(rank){
          human.push(val);
        }
      }
    });
    human.sort((a, b)=>{
      return parseInt(a["abundances"]["human abundance"].split('(rank: ')[1]) - parseInt(b["abundances"]["human abundance"].split('(rank: ')[1])
    });
    human.forEach(v=>{console.log(v["basicProps"]["symbol"], parseInt(v["abundances"]["human abundance"].split('(rank: ')[1]))});
  }
  seeAll(){
    this.year = -3000;
    this.counter = setInterval( ()=>{
      this.year = this.year+1;
      if(this.year == 2017){
        clearInterval(this.counter);
      }
    }, 50);
  }
  changeYear(){
    clearInterval(this.counter);
  }
  showMore(e:Object){
    this.moreInfo = !this.moreInfo;
    this.selectedElement = e;
  }
}

/*
#O 1
#C 2
#H 3
#N 4
#Ca 5
#P 6
#K 7
#S 7
#Na 9
#Cl 10
#Mg 11
#Si 12
#Fe 13
#F 14
#Zn 15
#Rb 16
#Sr 16
#Br 18
#Pb 19
#Cu 20
#Al 21
#Cd 22
#B 22
#Ba 24
#Mn 25
#I 25
#Sn 25
#Mo 28
#Ni 28
#Au 28
#Se 31
#Zr 31
#As 31
#Li 34
#V 34
#Co 37
#Cs 37
#U 39
#Be 40
#Ra 41

  */
