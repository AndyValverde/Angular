import { Component, OnInit } from '@angular/core';

import {HeroesService, heroe} from '../../service/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : heroe[] = [];
  constructor(private _heroesService : HeroesService,
              private routerHeroe :Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroes(index : number){
    //redirecciona, la ruta debe
    this.routerHeroe.navigate(['/heroe',index]);
  }

}
