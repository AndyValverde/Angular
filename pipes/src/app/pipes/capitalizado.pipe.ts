import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todo:boolean = true): string {
    //vuelve todo a minuscula
    value = value.toLowerCase();
    //separa el string en un arreglo cada vez que aparezca lo que esta " " 
    let variable  = value.split(" ");
    //si la variable es true
    if (todo){
      //pone en la variable el resultado de map - map por cada elemento del arreglo realiza una función y vuelve a poner el elemento trasformado en la misma posisicón
      variable = variable.map(resultado => {
        //en la posición cero de cada elemento (cada elemento es resultado) pone en mayuscula y le agrega el mismo elemento pero a partir de la posicón 1
        return resultado[0].toUpperCase() + resultado.substr(1);
      });
    }
    // si es false
    else{
      //en la posicion cero del srreglo(variable[0]) pone lo en la primeraposición del primer elemento en mayuscula (variable[0][0].toUpperCase() )
      //y le adjunta lo que tiene el primer elemento a partir de la posición 1 (variable[0].substr(1)) 
      return variable[0]= variable[0][0].toUpperCase() + variable[0].substr(1);
    }
    //junta cada valor del arreglo cada elemento es unido con lo que esta entre " " podria ir una letra
    return variable.join(" ");
  }

}
