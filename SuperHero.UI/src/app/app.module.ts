import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroService } from './services/super-hero.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    EditHeroComponent
  ],
  providers: [
    SuperHeroService,
    {provide: APP_BASE_HREF, useValue:'https://localhost:7123/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
