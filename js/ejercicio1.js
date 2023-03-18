let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


document.write(`<h2>Lista de meses</h2>`)
document.write('<ul>')
for(let indice = 0; indice < meses.length ; indice++ ){
    document.write(`<li>${meses[indice] } </li>`)
}
document.write('</ul>')