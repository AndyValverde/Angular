(()=>{

    const pepe = new Promise((resolve, reject)=> {
        setTimeout(
            ()=>{
                reject('Se termino el timeout');
            },1000)
    });

    pepe.then(
        mensaje => console.log(mensaje)
    ).catch(err => console.log(err));
})();  



