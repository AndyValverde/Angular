import { Component, OnInit } from '@angular/core';
import {HeroesService, heroe} from '../../service/heroes.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: [
  ]
})
export class BuscarHeroesComponent implements OnInit {
  heroes : heroe[];
  terminos : string;
  constructor(private _heroesService: HeroesService,
              private activateRoute: ActivatedRoute,
              private route: Router) {
                
               }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      param =>{
        this.terminos =param['busqueda'];//para recuperar la busqueda
        this.heroes = this._heroesService.buscarHeroes(param['busqueda']);
      }
    );
  }
  verHeroe(index : number){
    //redirecciona, la ruta debe
    this.route.navigate(['/heroe',index]);
  }

}
