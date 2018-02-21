import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [ButtonsModule.forRoot()]
  ],
  providers: [
      HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
