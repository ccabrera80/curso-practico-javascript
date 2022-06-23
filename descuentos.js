/*const precio = 1220;
const descuento = 50;
const porcentajeConDescuento = 100 - descuento;
const precioFinal = (precio * porcentajeConDescuento) / 100;

console.log ({
    precio,
    descuento,
    porcentajeConDescuento,
    precioFinal
});*/

function calcPrecioFinal(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajePrecioConDescuento) / 100;

    return precioFinal;
}

//funcion para interactuar con HTML

function calcularPrecioFinal() {
    const inputPrecio = document.getElementById("precioProducto");
    const valuePrecio = inputPrecio.value;

    const inputDescuento = document.getElementById("descuentoProducto");
    const valueDescuento = inputDescuento.value;

    const final = calcPrecioFinal(valuePrecio, valueDescuento);
    //alert(final);
    
    const resultPrecio = document.getElementById("resultPrecio");
    document.getElementById("ResultPrecio").innerHTML = "El precio con descuento es: $ " + final;
    //resultPrecio.innerHTML = "El Precio con descuento es: $" + final;
}