let ladoA = parseInt(prompt('Ingrese el valor del lado A de un rectangulo'));
let ladoB = parseInt(prompt('Ingrese el valor del lado B de un rectangulo'));

function perimetroRectangulo(){
    let perimetro = 2 * (ladoA + ladoB);
    return(`El perimetro del rectangulo es ${perimetro}`);
}

document.write(perimetroRectangulo());