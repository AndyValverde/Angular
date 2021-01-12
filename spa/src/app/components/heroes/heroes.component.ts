import { Component, OnInit } from '@angular/core';

import {HeroesService, heroe} from '../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : heroe[] = [];
  constructor(private _heroesService : HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
