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

  constructor(private heroesService: SuperHeroService) {}

  ngOnInit() {
    this.heroes = this.heroesService.GetSuperHeroes();
    console.log(this.heroes);
  }
  
}
