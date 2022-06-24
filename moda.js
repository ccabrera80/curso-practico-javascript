const listaModa = [
    1,1,2,2,2,2,3,3,3,2,2,2,1,1,4,4,4,5
]

const listaModaCount = {};

listaModa.map(

    function (elemnto) {

        if (listaModaCount[elemnto]) {
            listaModaCount[elemnto] += 1;
        } else {

            listaModaCount[elemnto] = 1;

        }
    }
);

const listaArray = Object.entries(listaModaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaArray[listaArray.length - 1];
