import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve=>{
      setTimeout(()=>resolve(LEADERS),2000);
    })
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((lead) => (lead.id === id))[0]), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((lead) => lead.featured)[0]), 2000);
    });
  }
}
