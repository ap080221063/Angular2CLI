import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.messageService.add('Selected Hero: ' + hero.name + '.');
      this.selectedHero = hero;
  }

  clearSelect(): void {
      this.messageService.add('Cleared selection.');
      this.selectedHero = undefined;
  }

  // getHeroes(): void {
  //    this.heroes = this.heroService.getHeroes();
  // }

    getHeroes(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    }
}
