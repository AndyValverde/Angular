 function imprimirClass(constructorClass : Function){// es una funcion que recibe de argumento una funcion (este va a ser el decorador)
    console.log(constructorClass);
 }
 @imprimirClass// aqui estamos llamando a la funcion que le agrega esta funcionalidad a la clase
 export class Xman {// esta clase si puede ser importada
    constructor(
        public nombre : string,
        public clave : string
    ){}
    imprimir (){ // metodo para imprimir las propiedades
        console.log(`${this.nombre} - ${this.clave}`);
    }
}
class Xman2 { // esta no podria
    constructor(
        public nombre : string,
        public clave : string
    ){}
}