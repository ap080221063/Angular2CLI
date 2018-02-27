import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <hr class="my-4">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-5">

                <div class="jumbotron" *ngIf="hero">
                    <h1 class="display-4">{{ hero.name | uppercase }}</h1>
                    <p class="lead">Details</p>
                    <hr class="my-4">
                    <div><span>Id: </span>{{ hero.id }}</div>
                    <div>
                        <label>Name:
                            <input [(ngModel)]= "hero.name" placeholder="hero's name">
                        </label>
                    </div>
                </div>

        </div>
    </div>
  </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  bsModalRef: BsModalRef;
  title: string;
  closeBtnName: string;

  constructor() { }

  ngOnInit() {}

}
