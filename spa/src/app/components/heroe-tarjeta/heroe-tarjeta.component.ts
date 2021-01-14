import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {heroe} from '../../service/heroes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() //esto hace ser visible a la variable
  heroe: heroe;
  @Input()
  index: number;

  @Output()
  heroeSelect : EventEmitter<number>;
  constructor(private routerHeroe :Router) {
    this.heroeSelect = new EventEmitter();
   }
  ngOnInit(): void {
  }
  verHeroe(){
    this.heroeSelect.emit(this.index+1);
    //redirecciona, la ruta debe
    //this.routerHeroe.navigate(['/heroe',this.index]);
  }

}
