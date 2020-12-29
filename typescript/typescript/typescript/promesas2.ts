(()=>{

    const retirarDinero = (dinero : number) :  Promise <number>  => {// promesa con un tipo de retorno especifico
        let actual= 1000;
        return new Promise((resolve, reject ) => {
            if(dinero > actual){
                reject('No hay suficientes fondos');
            }else{
                actual -= dinero; // actual = actual - dinero 
                resolve(actual);
            }
        });
    }
    retirarDinero(1500)
    .then(//monto es lo que me regreso en actual
        monto => console.log(`Me queda ${monto}`)).catch(error => console.warn(error));
})();  



