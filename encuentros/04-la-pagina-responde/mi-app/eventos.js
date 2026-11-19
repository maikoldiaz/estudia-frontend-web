// ===== 5. Mensajes: qué pasó y qué hacer, con palabras =====
// Pega este bloque al final de tu app.js, debajo de pintar(piezas).
// En tu index.html deben existir el formulario y el párrafo del mensaje (mira cambios-index.txt).
const formulario = document.querySelector("#formulario");
const campo = document.querySelector("#campo");
const mensaje = document.querySelector("#mensaje");

const avisar = (texto, hayError) => {
  mensaje.textContent = texto;
  if (hayError) {
    campo.setAttribute("aria-invalid", "true"); // los lectores de pantalla avisan que ese campo tiene un problema
    campo.focus(); // el cursor vuelve al campo para corregir
  } else {
    campo.removeAttribute("aria-invalid");
  }
};

// ===== 6. Escuchar el formulario: una sola vez, fuera de pintar =====
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // tu JavaScript se encarga: el navegador no recarga la página

  const texto = campo.value.trim();

  // Validar ANTES de cambiar los datos.
  if (texto === "") {
    avisar("No se agregó: escribe un nombre.", true);
    return;
  }
  // some responde sí o no: ¿hay alguna pieza con ese mismo nombre?
  const repetido = piezas.some((pieza) => pieza.nombre.toLowerCase() === texto.toLowerCase());
  if (repetido) {
    avisar(`No se agregó: «${texto}» ya está en la lista. Escribe otro nombre.`, true);
    return;
  }

  // Cambiar el estado y volver a pintar.
  piezas.push({ nombre: texto, detalle: "Agregado desde el formulario", valor: 0 });
  pintar(piezas);
  avisar(`Listo: «${texto}» se agregó en esta página. No se guardó en ningún servidor.`, false);
  campo.value = "";
});

// ===== Registro de pruebas: escribe lo que esperabas y lo que pasó =====
// Caso 1 · vacío     · entrada: ""            · esperado: ...  · observado: ...
// Caso 2 · válido    · entrada: "..."         · esperado: ...  · observado: ...
// Caso 3 · repetido  · entrada: (el mismo)    · esperado: ...  · observado: ...
