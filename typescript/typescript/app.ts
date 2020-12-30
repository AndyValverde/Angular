(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  const PERSONAJE = {
    nombre, // cuando tienes una propiedad con el valor de una variable se puede omitar
    edad: edad// tambien podria quitarla de aqui pero para que se note la diferencia
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface superheroe {
    nombre : string;
    artesMarciales : string[];
  }
  const batman : superheroe= {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = ( a : number , b : number) : number =>  (a + b) * 2
  

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = ( nombre: string, poder? : string, arma : string = 'arco') : string => {
    if( poder ){
      return `${nombre} tiene el poder de ${poder} y un arma ${arma}`;
    }else{
      return `${nombre} tiene un arma ${arma}`
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
  class Rectangulo { //el nombre de las clases empieza en mayusculas
      constructor(public base : number, public altura : number){}
      calcularElArea() : number{
        return this.base * this.altura;
      }
      // tambien se puede hacer como funcion de flecha
      calculaArea = () : number => this.base * this.altura;
  }


})();