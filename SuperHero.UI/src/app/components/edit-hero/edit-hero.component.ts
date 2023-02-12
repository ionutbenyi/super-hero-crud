import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/model/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private heroService: SuperHeroService) {}

  ngOnInit() {
  }

  addHero(superHero: SuperHero){
    this.heroService.addSuperHero(superHero).subscribe((heroes) => this.heroesUpdated.emit(heroes));
  }

  deleteHero(superHero: SuperHero){
    this.heroService.deleteSuperHero(superHero).subscribe((heroes) => this.heroesUpdated.emit(heroes));
  }

  updateHero(superHero: SuperHero){
    this.heroService.updateSuperHero(superHero).subscribe((heroes) => this.heroesUpdated.emit(heroes));
  }

}
