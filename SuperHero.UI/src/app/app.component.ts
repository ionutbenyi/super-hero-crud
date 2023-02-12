import { Component } from '@angular/core';
import { SuperHero } from './model/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes : SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private heroesService: SuperHeroService) {}

  ngOnInit() {
    this.heroesService.getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  InitHero(){
    this.heroToEdit = new SuperHero();
  }

  EditHero(hEdit: SuperHero){
    this.heroToEdit = hEdit;
  }

  updateHeroList(heroList: SuperHero[]){
    this.heroes = heroList;
  }
  
}
