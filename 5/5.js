
const ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

function calcularPerimetro(a, b) {
    return 2 * (a + b);
}

const perimetro = calcularPerimetro(ladoA, ladoB);


console.log("El perímetro del rectángulo es: " + perimetro);
