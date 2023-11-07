function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}


const numero = 10; 
let resultado = determinarParOImpar(numero);
console.log(resultado);
