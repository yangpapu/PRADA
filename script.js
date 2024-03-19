var indiceImagen = 5; // Índice de la imagen actual
var totalImagenes = 10; // Número total de imágenes
var titulosImagenes = [
  "FW 2024 Womenswear",
  "National Geographic Creative Works x Prada Re-Nylon",
  "FW 2024 Menswear",
  "Days of Prada",
  "SS 2024 Womenswear",
  "SS 2024 Menswear"
]; // Títulos de las imágenes

function cambiarImagen() {
  var imagen = document.getElementById('imagen');
  var titulo = document.getElementById('imagen-titulo');

  indiceImagen++; // Incrementar el índice de la imagen
  if (indiceImagen > totalImagenes) {
    indiceImagen = 10; // Volver al inicio si llegamos al final de las imágenes
  }
  imagen.src = "imgs/IMG-" + indiceImagen + ".jpg";
  titulo.textContent = titulosImagenes[indiceImagen - 5]; // Actualizar el título
}

function imagenAnterior() {
  var imagen = document.getElementById('imagen');
  var titulo = document.getElementById('imagen-titulo');

  indiceImagen--; // Decrementar el índice de la imagen
  if (indiceImagen < 5) {
    indiceImagen = 5; // Ir al final si estamos en la primera imagen
  }
  imagen.src = "imgs/IMG-" + indiceImagen + ".jpg";
  titulo.textContent = titulosImagenes[indiceImagen - 5]; // Actualizar el título
}

