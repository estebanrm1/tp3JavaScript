function infoCadena(texto){
    if(texto == texto.toUpperCase()){
        return('El texto esta formado solo por mayusculas');
    }else if(texto == texto.toLowerCase()){
        return('El texto esta formado solo por minusculas');
    }else{
        return('El texto esta formado por minusculas y mayusculas');
    }
}

let texto = prompt('Ingrese un texto');
document.write(infoCadena(texto));