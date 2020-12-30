(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    const PERSONAJE = {
        nombre,
        edad: edad // tambien podria quitarla de aqui pero para que se note la diferencia
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (nombre, poder, arma = 'arco') => {
        if (poder) {
            return `${nombre} tiene el poder de ${poder} y un arma ${arma}`;
        }
        else {
            return `${nombre} tiene un arma ${arma}`;
        }
    };
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            // tambien se puede hacer como funcion de flecha
            this.calculaArea = () => this.base * this.altura;
        }
        calcularElArea() {
            return this.base * this.altura;
        }
    }
})();
