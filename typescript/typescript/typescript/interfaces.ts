
(()=>{
//antes
    //funciones
   const enviarMision = (xman : {nombre : string}) => {
    console.log(`Enviando a ${xman.nombre}`);
   }

   const regresar = (xman: {nombre:string}) => {
       console.log(`Enviando a ${xman.nombre}`);
   }
   //objeto
   const wolverine = {
       nombre : 'Logan',
       edad : 33
   }
   // llamar a las funciones
   enviarMision(wolverine);
   regresar(wolverine);
   //los inconvenientes aqui es si quieres cambiar el nombre de la variable "nombre" tendrias que cambiarla en muchas partes
//con interfaces
   //interfaz
   interface Xman {
    nombre: string,
    edad: number,
    opcional ? : number //esta es opcional y puede o no ser solicitado
   }
   //las funciones
   const enviarMision2 = (xman : Xman) =>{
    console.log(`Enviando a ${xman.nombre}`);
   }
   const regresar2 = (xman : Xman) =>{
    console.log(`Enviando a ${xman.nombre}`);
   }
   //el objeto
   const wolverine2 : Xman = { // tipamos de tipo xman para asegurarnos que cumpla lo minimo para utilizarlo en nustras funciones
        nombre : 'Logan',
        edad : 33,
        //otro : 2 no se podria poner porque no esta incluida en la interface
   }
   //llamar a las funciones
   enviarMision(wolverine);
   regresar(wolverine);
})();  



