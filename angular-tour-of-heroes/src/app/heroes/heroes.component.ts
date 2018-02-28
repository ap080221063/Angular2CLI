import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { ToastrService } from 'ngx-toastr';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  bsModalRef: BsModalRef;
  constructor(private heroService: HeroService,
              private messageService: MessageService,
              private toastr: ToastrService,
              private modalService: BsModalService) {
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

  getHeroes(): void {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
      this.toastr.info('Heroes have been loaded.');
  }

  openModalWithComponent(hero: Hero): void {
      this.onSelect(hero);
      const initialState = {
        detailedhero: hero,
        title: hero.name + ' details',
      };
    this.bsModalRef = this.modalService.show(HeroDetailComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }
}
