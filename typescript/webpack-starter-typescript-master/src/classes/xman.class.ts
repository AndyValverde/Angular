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