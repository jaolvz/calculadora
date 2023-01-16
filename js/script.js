
   
  function limparVisor()
       {
           var visor= document.getElementById('visor');
           visor.value='';
   
       }


function calcular ( valor ){


    var visor= document.getElementById('visor');




    if ( valor >=0 && valor <=9 )
    {
        visor.value += valor;
    }

    if ( valor == '.'){
        
        visor.value += valor;


 
    }


if(valor=="+" || valor=="-" || valor=="/" || valor=="*"  )
{
    
    visor.value += valor;
}


    
if ( valor=='=')
{
    console.log(eval(visor.value));
    visor.value= eval(visor.value);
}




}