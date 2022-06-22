//codigo del cuadrado

console.group("cuadrados");

const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden " + ladoCuadrado + "cms");
const perimetroCuadrado = ladoCuadrado * 4 ;
console.log ("El perimetro del cuadrado es " + perimetroCuadrado + "cms");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es " + areaCuadrado + "cm 2" );

console.groupEnd();

//codigo del triangulo

console.group("Triangulos");

const lado1 = 6;
const lado2 = 6;
const lado3 = 4;
const alturatriangulo = 5.5;
console.log("Los lados del triangulo son Lado1: " + lado1 + ", lado2: " + lado2 + ", lado3: " + lado3);
const perimetrotriangulo = lado1 + lado2 + lado3;
console.log("El perimetro del triangulo es : " + perimetrotriangulo);
const areatriangulo = (lado3 * alturatriangulo) / 2;
console.log("El area del triangulo es: " + areatriangulo + "cm2");  

console.groupEnd();

//codigo del circulo

console.group("Circulo");

const radiocirculo = 4;
const diametrocirculo = radiocirculo * 2;
const PI = 3.1415;
console.log("El radio del circulo es :" + radiocirculo);
const perimetrocirculo = diametrocirculo * PI;
console.log("El perimetro del circulo es: " + perimetrocirculo);
const areacirculo = (radiocirculo * radiocirculo) * PI;
console.log("El area del circulo es: " + areacirculo);

console.groupEnd();
