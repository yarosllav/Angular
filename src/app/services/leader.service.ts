import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { promise } from 'protractor';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
    getLeaders(): Observable<Leader[]> {
      return of(LEADERS).pipe(delay(2000));
    }
  
    getLeader(id: number): Observable<Leader> {
      return of(LEADERS.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    }
  
    getFeaturedLeader(): Observable<Leader> {
      return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    }
  }

