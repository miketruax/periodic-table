import { Pipe, PipeTransform } from '@angular/core';
import { PeriodicElement } from '../../interfaces/element.interface';

@Pipe({ name: 'ranking' })
export class RankingPipe implements PipeTransform {
  transform(elem: Object[], type: string) {
    let ret = [];
    if(type !== "yearDiscovered"){
        ret = elem.filter((val: PeriodicElement) => {
          if (val.abundances && val.abundances[type]) {
            return true
          }
          return false
        });
        ret.sort((a, b) => {
          return parseInt(a.abundances[`${type}Rank`]) - parseInt(b.abundances[`${type}Rank`])
        });
        return ret;
      }
      else{
        ret = [...elem];
      
        ret.sort((a, b) => {
          return a.basicProperties.yearDiscoveredRank > b.basicProperties.yearDiscoveredRank ? 1 : a.basicProperties.yearDiscoveredRank < b.basicProperties.yearDiscoveredRank ? -1 : 0;
        });
        return ret;
      }
    }
  }
