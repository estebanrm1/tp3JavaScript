let ciudades = [];

do{ciudades.push(prompt('Ingrese ciudades y el pais de la misma. Ej. Paris, Francia'));
}while(confirm('¿Desea ingresar otra ciudad?'));

document.write(`<h2>Lista de ciudades</h2>`);
document.write('<ul>');
for(let indice = 0; indice < ciudades.length ; indice++ ){
    document.write(`<li>${ciudades[indice] } </li>`)
}
document.write('</ul>')
document.write(`<p>La lista Contiene ${ciudades.length} Ciudades`);
document.write(`<li>Ciudad 1er posicion: ${ciudades[0] } </li>`);
document.write(`<li>Ciudad 3er posicion: ${ciudades[2] } </li>`);
document.write(`<li>Ciudad ultima posicion: ${ciudades[ciudades.length - 1] } </li>`);
document.write(`<br>`);

ciudades.push('Paris');
document.write(`<li>Ciudad ultima posicion: ${ciudades[ciudades.length - 1] } </li>`);
document.write(`<li>Ciudad 1er posicion: ${ciudades[1] } </li>`);
ciudades.splice(1,0, 'Barcelona');

document.write(`<h2>Lista de ciudades</h2>`);
document.write('<ul>');
for(let indice = 0; indice < ciudades.length ; indice++ ){
    document.write(`<li>${ciudades[indice] } </li>`)
}