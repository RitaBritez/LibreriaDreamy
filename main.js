    // Función para solicitar la cantidad de libros al usuario
function solicitarCantidadLibros() {
    const cantidadLibros = parseInt(prompt('¿Cuántos libros deseas comprar?'), 10);

if (isNaN(cantidadLibros) || cantidadLibros <= 0) {
    alert('Por favor, ingresa una cantidad válida de libros.');
    return 0;
}

    return cantidadLibros;
}

    // Función para solicitar la información de cada libro y calcular el costo total
function calcularCostoTotal() {
    const cantidadLibros = solicitarCantidadLibros();
    let costoTotal = 0;

for (let i = 1; i <= cantidadLibros; i++) {
    const tituloLibro = prompt(`Ingresa el título del libro ${i}:`);
    const precioLibro = parseFloat(prompt(`Ingresa el precio del libro ${i}:`));

if (isNaN(precioLibro) || precioLibro <= 0) {
    alert('Por favor, ingresa un precio válido para el libro.');
    return;
}

    costoTotal += precioLibro;
}

    mostrarResultado(costoTotal);
}

    // Función para mostrar el resultado al usuario
function mostrarResultado(costoTotal) {
    alert(`El costo total de tu compra es: $${costoTotal.toFixed(2)}`);
}

    // Llamar a la función principal para iniciar la simulación de compra
calcularCostoTotal();