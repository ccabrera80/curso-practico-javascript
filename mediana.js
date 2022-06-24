/*const listaMedia = [
    100,
    200,
    500,
    4000000
];*/

function calcularMediana(listaMedia) {

const mitadListaMedia = parseInt(listaMedia.length /2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let mediana;

if (esPar(listaMedia.length)) {

    const  elemento1 = listaMedia[mitadListaMedia];
    const  elemento2 = listaMedia[mitadListaMedia - 1];
    mediana = (elemento1 + elemento2) /2;

} else {
    mediana = listaMedia[mitadListaMedia];
}

return mediana;

}