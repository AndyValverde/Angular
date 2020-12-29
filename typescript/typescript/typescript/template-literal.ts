(function(){
function getEdad(){
    return 100 + 100;
}

    const nombre = 'Andrea';
    const apellido = 'Valverde'
    const edad = 26;
    //Andrea Valverde (26)
    //const salida = nombre + " " + apellido + " ( " + edad + " )"; --> sin templates literales
    const salida = `${nombre} ${ apellido } ( ${edad} )`;
    console.log(salida);
    const salida2 = `${nombre} 
    ${ apellido }
( ${edad + 10} )
    ${getEdad()}`; 
    console.log(salida2);
})();  



