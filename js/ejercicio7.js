let numero =parseInt(prompt('Ingrese un numero(1-10)'));

function tablaDeMultiplicar(){

    let x=0;
    
    document.write(`<table border style="text-align: center;" cellpadding="10">`);
    for (x = 1; x <= 10; x++) {
        let tabel = numero * x;
        document.write('<tr><td>');
        document.write(`${numero}x` + x +"="+ tabel + '<br>');
        document.write('</td></tr>');
    };
    return(`</table>`);
};

document.write(tablaDeMultiplicar());