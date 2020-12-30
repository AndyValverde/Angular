(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const restar = (a, b) => {
        return a - b;
    };
    const desconocido = () => {
        return new Promise((resort, reject) => {
            resort('Hola');
        });
    };
    //desconocido. no aparece porque necesitas "()" para que sea funcion
    //si imprime en mayusculas aunque lo marque como incorrecto
    desconocido().then(x => console.log(x.toUpperCase())); // no reconoce el toUpperCase porque la promes (linea 8) no nos dice que es un string
    const conocido = () => {
        return new Promise((resort, reject) => {
            resort('hello');
            reject(2);
        });
    };
    conocido().then(x => console.log(x.toUpperCase)).catch(x => console.log(x)); // sino le pones los "()" al toUpperCase no va imprimir el resort
    conocido().then(x => console.log(x.toUpperCase())).catch(x => console.log(x));
})();
