import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService, private toastr: ToastrService) {
  }

  ngOnInit() {
    setTimeout(() => this.getHeroes());
  }

  onSelect(hero: Hero): void {
      let message: string;
      message = 'Selected Hero: ' + hero.name + '.';
      this.messageService.add(message);
      this.toastr.info(message);
      this.selectedHero = hero;
  }

  clearSelect(): void {
      this.messageService.add('Cleared selection.');
      this.toastr.info('Cleared selection.');
      this.selectedHero = undefined;
  }

  // getHeroes(): void {
  //    this.heroes = this.heroService.getHeroes();
  // }

    getHeroes(): void {
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        this.toastr.info('Heroes have been loaded.');
    }
}
