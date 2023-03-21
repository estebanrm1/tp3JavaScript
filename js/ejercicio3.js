let tirada = [];

let apariciona = 0;
let aparicionb = 0;
let aparicionc = 0;
let apariciond = 0;
let aparicione = 0;
let aparicionf = 0;
let apariciong = 0;
let aparicionh = 0;
let aparicioni = 0;
let aparicionj = 0;
let aparicionk = 0;

function tiradaDado1(){
    let dado6caras = parseInt(6*Math.random()+1);
    return dado6caras;
}
function tiradaDado2(){
    let dado6caras = parseInt(6*Math.random()+1);
    return dado6caras;
}

for(i=1;i<=50;i++){
    tirada.push(tiradaDado1() + tiradaDado2());
}


for(let indice = 0; indice < tirada.length ; indice++ ){
    switch(tirada[indice]){
        case 2:
            apariciona++
            break;
        case 3:
            aparicionb++
            break;
        case 4:
            aparicionc++
            break;
        case 5:
            apariciond++
            break;
        case 6:
            aparicione++
            break;
        case 7:
            aparicionf++
            break;
        case 8:
            apariciong++
            break;
        case 9:
            aparicionh++
            break;
        case 10:
            aparicioni++
            break;
        case 11:
            aparicionj++
            break;
        case 12:
            aparicionk++
            break;
        default:
            document.write('La suma es invalida')
            break;
    }

}
document.write(`
  <table border="1" style="text-align: center;" cellpadding="10">
    <thead>
      <tr>
        <th>Suma🎲🎲</th>
        <th>Apariciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>${apariciona}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>${aparicionb}</td>
      </tr>
      <tr>
        <td>4</td>
        <td>${aparicionc}</td>
      </tr>
      <tr>
        <td>5</td>
        <td>${apariciond}</td>
      </tr>
      <tr>
        <td>6</td>
        <td>${aparicione}</td>
      </tr>
      <tr>
        <td>7</td>
        <td>${aparicionf}</td>
      </tr>
      <tr>
        <td>8</td>
        <td>${apariciong}</td>
      </tr>
      <tr>
        <td>9</td>
        <td>${aparicionh}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>${aparicioni}</td>
      </tr>
      <tr>
        <td>11</td>
        <td>${aparicionj}</td>
      </tr>
      <tr>
        <td>12</td>
        <td>${aparicionk}</td>
      </tr>
    </tbody>
  </table>
`);