function esParoImpar(numero){
    if(numero % 2 == 0){
        return(`El numero ${numero} es Par`);
        }else{
        return(`El numero ${numero} es impar`);
    }
}

let numero = prompt('Ingrese un numero');
document.write(esParoImpar(numero))