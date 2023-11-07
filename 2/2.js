let ciudades = [];

while (true) {
    var ciudad = prompt("Ingrese el nombre de una ciudad:");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

console.log(ciudades);

console.log("Longitud del arreglo: " + ciudades.length);

document.write("Primera ciudad: " + ciudades[0] + "<br>");
document.write("Tercera ciudad: " + ciudades[2] + "<br>");
document.write("Última ciudad: " + ciudades[ciudades.length - 1] + "<br>");

ciudades.push("París");

document.write("Segunda ciudad: " + ciudades[1] + "<br>");

ciudades[1] = 'Barcelona';

console.log(ciudades);
