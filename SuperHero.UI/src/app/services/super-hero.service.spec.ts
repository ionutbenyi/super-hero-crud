/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuperHeroService } from './super-hero.service';

describe('Service: SuperHero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperHeroService]
    });
  });

  it('should ...', inject([SuperHeroService], (service: SuperHeroService) => {
    expect(service).toBeTruthy();
  }));
});
