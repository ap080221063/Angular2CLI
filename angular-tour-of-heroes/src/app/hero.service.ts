import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { element } from 'protractor';

@Injectable()
export class HeroService {

  private heroList = new Subject<Hero[]>();
  filteredHeroList: Hero[];

  constructor(private messageService: MessageService) { }

  sendFilteredHeroList(filter: string) {
    if (filter === null || filter === '' ) {
      this.heroList.next(HEROES);
    } else {
      let localherolist: Hero[];
      localherolist = new Array<Hero>();
      HEROES.forEach(e => {
        if (e.name.startsWith(filter)) {
          localherolist.push(e);
        }
      });

    this.heroList.next(localherolist);
    }
  }

  clearFilter() {
    console.log('heroservice->clearfilter');
    this.heroList.next(HEROES);
  }

  getHeroList(): Observable<Hero[]> {
    console.log('heroservice->getherolist');
    this.heroList.next(HEROES);
    return this.heroList.asObservable();
  }

}
