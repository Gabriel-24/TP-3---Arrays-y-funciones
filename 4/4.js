function analizarCadena(texto) {
    if (texto === texto.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (texto === texto.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

const cadena = "Hola Mundo"; 
let resultado = analizarCadena(cadena);
console.log(resultado);
