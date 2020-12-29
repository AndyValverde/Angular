
(()=>{
    class Avenger {// clase sin costructor
        nombre : string = 'prueba';// atributo con un valor determinado pero se puede sobreescribir este valor
        equipo : string;// este no esta inicializado no aparecera hasta que lo inicialices (ver linea 10)
        otro : string;

    }
    const cap : Avenger = new Avenger();// creando objeto de la clase (puede ir o no el tipado)
    cap.equipo = 'cap';// asigna valor al atributo equipo
    const iron = new Avenger();//crear objeto sin tipado
    //impresion
    console.log(iron.otro);// no esta definido
    console.log(iron);
    console.log(cap); 

    class Avenger2 {// clase con constructor recuerda que solo puede tener UN SOLO constructor
        nombre : string = 'prueba';
        public equipo ?: string;// puede ser opcional pero si no se le asigna valor no lo reconocera
        private otro : string; // pueden ser public o private
        //prueba puede ir o no sino va entonces es undefined y defecto trae valor por defecto pero puede ir (ver linea 30)
        constructor( nombre1 : string, public prueba ?:string, public defecto: string = "defecto"){
            this.nombre = nombre1;// se asigna nombre1 a nombre
            
        }
        

    }
    const cap2 = new Avenger2('cap');// por el constructor (linea 22)
    const cap3 = new Avenger2('cap','cap','cap');// los tres se definen como cap
    console.log(cap2);
    console.log(cap3);

})();  



