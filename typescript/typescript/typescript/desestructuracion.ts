(()=>{
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America!',
        poder: 'droga',
        otro: 'prueba'
     }
     const {clave} = avenger;// debe ser con el mismo nombre
     console.log(`${avenger.nombre}`);
     console.log(clave);
     console.log(avenger.poder);
     const extraer = ({otro}) =>{//destructuracion en el argumento
         console.log(otro);
     }
     extraer(avenger);

     const avengers: string[] = ['Thor', 'Ironmam','Spiderman'] ;//arreglo de string
     console.log(`${avengers[0]}`);
     console.log(avengers[2]);
     const [t,i,s] = avengers;//destructuración
     console.log(`${t}`);
     console.log(i);
     const [,,spider] = avengers;//destructuración
     console.log(spider);
     const extraerArr = ([thor,,]:string[]) =>{//destructuracion en el argumento
        console.log(thor);
    }
    extraerArr(avengers);
})();  



