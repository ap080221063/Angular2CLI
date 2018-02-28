import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  detailedhero: Hero;
  title: string;
  closeBtnName: string;

  constructor() {// hero: Hero, bsModalRef: BsModalRef, title: string, closeBtnName: string
    // this.hero = hero;
    // this.bsModalRef = bsModalRef;
    // this.title = title;
    // this.closeBtnName = closeBtnName;
   }

  ngOnInit() {}

}
