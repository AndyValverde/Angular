import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string ="Andrea Valverde";
  nombreRaro : string = "AnDrEA VAlvErDE";
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario : number = 1234.5;
  heroe = {//objeto
    logan : "Logan",
    clave : "wolverine",
    edad: 500,
    direccion : {//objeto dentro del objeto
      calle: "primavera",
      casa : 20
    }
  }
  //esta promesa regresa un string!
  promesa = new Promise<string>((resolve) => {
    setTimeout(() => resolve('llego la data'),4500);
  });
  fecha : Date = new Date();
  idioma :string = 'es';
}
