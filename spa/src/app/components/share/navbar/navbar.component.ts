import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private busquedaR: Router) { }

  ngOnInit(): void {
  }
  //esta es la funcion de busqueda
  getHeroes(busqueda : string){
    this.busquedaR.navigate(['/heroesB',busqueda]);

  }

}
