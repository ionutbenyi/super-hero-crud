import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../model/super-hero';

@Injectable({
    providedIn: 'root'
})
export class SuperHeroService {

    url = "SuperHero";
    constructor(private http: HttpClient, @Inject(APP_BASE_HREF) private baseHref: string) { }

    public getSuperHeroes(): Observable<SuperHero[]> {
        return this.http.get<SuperHero[]>(`${this.baseHref}/${this.url}`);
    }

    public updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
        return this.http.put<SuperHero[]>(`${this.baseHref}/${this.url}`, hero);
    }

    public addSuperHero(hero: SuperHero): Observable<SuperHero[]> {
        return this.http.post<SuperHero[]>(`${this.baseHref}/${this.url}`, hero);
    }

    public deleteSuperHero(hero: SuperHero): Observable<SuperHero[]> {
        return this.http.delete<SuperHero[]>(`${this.baseHref}/${this.url}/${hero.id}`);
    }

}
