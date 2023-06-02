function divisiblePor2(numero){

    var numero = document.getElementById('num1').value;
    
    if(numero % 2 === 0){
        alert("El número "+numero+" es divisible entre 2");
    }else{
        alert("El número "+numero+" no es divisible entre 2");
    }
    
}
