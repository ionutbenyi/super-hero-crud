import { Injectable } from '@angular/core';
import { SuperHero } from '../model/super-hero';

@Injectable()
export class SuperHeroService {

constructor() { }

public GetSuperHeroes(): SuperHero[] {
    var hero = new SuperHero();
    hero.id = 1;
    hero.name = "Spider-Man";
    hero.firstName="Peter";
    hero.lastName="Parker";
    hero.place="New York City";

    return [hero];
}

}
