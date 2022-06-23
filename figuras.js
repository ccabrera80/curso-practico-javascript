//codigo del cuadrado

console.group("cuadrados");

/*const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden " + ladoCuadrado + "cms");
const perimetroCuadrado = ladoCuadrado * 4 ;
console.log ("El perimetro del cuadrado es " + perimetroCuadrado + "cms");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es " + areaCuadrado + "cm 2" );*/

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//codigo del triangulo

console.group("Triangulos");

/*const lado1 = 6;
const lado2 = 6;
const lado3 = 4;
const alturatriangulo = 5.5;
console.log("Los lados del triangulo son Lado1: " + lado1 + ", lado2: " + lado2 + ", lado3: " + lado3);
const perimetrotriangulo = lado1 + lado2 + lado3;
console.log("El perimetro del triangulo es : " + perimetrotriangulo);
const areatriangulo = (lado3 * alturatriangulo) / 2;
console.log("El area del triangulo es: " + areatriangulo + "cm2");  */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//codigo del circulo

/*console.group("Circulo");

const radiocirculo = 4;
const diametrocirculo = radiocirculo * 2;
const PI = 3.1415;
console.log("El radio del circulo es :" + radiocirculo);
const perimetrocirculo = diametrocirculo * PI;
console.log("El perimetro del circulo es: " + perimetrocirculo);
const areacirculo = (radiocirculo * radiocirculo) * PI;
console.log("El area del circulo es: " + areacirculo);*/

const pi = 3.1415;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi; 
}

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();



//Aqui interactuamos con HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;   
    
    const area = areaCuadrado(value);
    alert(area);
}

//Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;   
    
    const area = areaCirculo(value);
    alert(area);
}

//Triangulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = inputBase.value;

    const perimetroT = perimetroTriangulo(Number(valueLado1), Number(valueLado2),Number(valueBase));

    alert(perimetroT);
}

//Funsion para calcular la altura del triangulo

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = inputBase.value;

    //Funsion para calcular altura del triangulo

    function alturaTriangulo(valueLado1, valueLado2, valueBase) {
        if (valueLado1 != valueLado2){
            alert ("No es un triangulo isoseles");
        }
        else {
            /*const ayuda = valueLado1  - ((valueBase * valueBase) / 4);*/
            const ayuda = Math.sqrt((valueLado2 * valueLado2) -(valueBase**2 / 4));
            return ayuda;
        }
    }

    const altura = alturaTriangulo(Number(valueLado1), Number(valueLado2),Number(valueBase));

    alert(altura);
}