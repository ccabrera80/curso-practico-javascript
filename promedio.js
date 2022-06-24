/*const lista1 = [
    100,
    200,
    300,
    500
];*/

function calcularPromedio(lista){

    /*let suma = 0;

    for(let i=0; i<lista.length; i++) {
        suma = suma + lista[i];
    }*/

    const suma = lista.reduce(
        function (valorAcumulado =0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = suma / lista.length;

    return promedio;

}