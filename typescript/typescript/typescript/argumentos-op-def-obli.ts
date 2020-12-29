(function(){
    function activar(quien : string, 
        objeto : string = 'Batiseñal',
        momento ?: string){
            if(momento){
                console.log(`${quien} activó la ${objeto} en la ${momento}`);
            }else{
                console.log(`${quien} activó la ${objeto}`);
            }
        
    }
    const prueba = (uno:string, dos:string ='dos', tres? : string) =>{
        if(tres){
            console.log(`${uno} activó la ${dos} en la ${tres}`);
        }else{
            console.log(`${uno} activó la ${dos}`);
        }
    }
    activar('Gordon');
    prueba('uno');
})();  



