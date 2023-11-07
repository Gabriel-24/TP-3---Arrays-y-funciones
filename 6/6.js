
const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));


function mostrarTablaMultiplicar(num) {
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}

mostrarTablaMultiplicar(numero);
