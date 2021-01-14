import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, heroe} from '../../service/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe :heroe;
  
  constructor(private activateRoute : ActivatedRoute,
              private _heroesService : HeroesService) {
                //recupera lo que trae el link (params es lo que regresa)
                this.activateRoute.params.subscribe(params =>{
                  this.heroe = this._heroesService.getHeroe(params['id']);
                })
               }

  ngOnInit(): void {
  }
  

}
