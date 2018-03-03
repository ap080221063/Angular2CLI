import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor(private heroservice: HeroService) { }

  myObservable = new Subject<string>();

  // Create observer object
  myObserver = {
    next: x => this.sendFilter(x), // console.log('Observer got a next value: ' + x),
    // error: err => console.error('Observer got an error: ' + err),
    // complete: () => console.log('Observer got a complete notification'),
  };

  clearFilter(): void {
    console.log('searchcomponent->clearfilter');
    this.myObservable.next(undefined);
    this.heroservice.clearFilter();
  }

  sendFilter(input): void {
    console.log('searchcomponent->sendfilter');
    this.heroservice.sendFilteredHeroList(input);
  }

  ngOnInit() {
    this.myObservable.subscribe(this.myObserver);
  }

}
