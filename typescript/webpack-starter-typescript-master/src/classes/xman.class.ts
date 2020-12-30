 export class Xman {// esta clase si puede ser importada
    constructor(
        public nombre : string,
        public clave : string
    ){}
}
class Xman2 { // esta no podria
    constructor(
        public nombre : string,
        public clave : string
    ){}
}