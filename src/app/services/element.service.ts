import { Injectable } from '@angular/core';
import { PeriodicElement } from '../interfaces/element.interface';
import elementsArray from "../shared/elem_v3";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  elements: Array<PeriodicElement> = elementsArray;
  style: BehaviorSubject<string>;
  constructor(private router: Router){
   
  }

  byName(name){
    let el = this.elements.filter(el=> el.basicProperties.name === name);
    if(el[0]){
        return el[0];
    }
    else{
        this.router.navigate(['/'])
        return null;
    }
  }

  rankedElements(type){
    let validTypes = ["yearDiscovered", "crustAbundance", "humanAbundance", "universeAbundance"];
    if(!validTypes.includes(type)){
        this.router.navigate(['/'])
        return [];
    }
    let property = type == 'yearDiscovered' ? "basicProperties" : "abundances";  
    let ret = [...this.elements];
    
    if(type !== "yearDiscovered"){
        ret = ret.filter((val: PeriodicElement) => {
          if (val.abundances && val.abundances[type]) {
            return true
          }
          return false
        });
      }
      
      ret = ret.sort((a,b)=>{
          if(a[property][`${type}Rank`] > b[property][`${type}Rank`]){
              return 1
          }
          if(a[property][`${type}Rank`] < b[property][`${type}Rank`]){
            return -1
          }
          return 0
      })
        return ret;
      }
 
}