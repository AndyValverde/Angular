(function(){
    let myfunction = function(a : string){
        return a.toUpperCase();
    }
    //let myFunctionFlecha = (a : string ) =>{
    //    return a;
    //}
    let myFunctionFlecha = (a : string ) => a.toUpperCase(); //por tener solo una linea de codigo
    console.log(`${myfunction("Prueba")} y ${myFunctionFlecha("segunda")}`);

    const sumar = function(a : number, b : number){
        return a + b;
    }

    const sumarFlecha = (a:number, b : number) => a + b;

    console.log(`${sumar(1,2)} y ${sumar(2,1)}`);

    const hulk = {
        nombre : 'hulk',
        //funcion
        smach(){
            //funcion setTimeout que hace una funcion despues de un tiempo
            setTimeout(
                //funcion que se va a hacer
                () =>{console.log(`${this.nombre} smash!!`);},
                //tiempo
                100);
        }
    }

    hulk.smach();

})();  



