// ===== Reto: filtrar con botones (delegación en el contenedor) =====
// En tu index.html:
//   <div id="filtros">
//     <button type="button" data-filtro="todas">Todas</button>
//     <button type="button" data-filtro="baratas">Menos de 2000</button>
//   </div>
// Cambia "baratas" y la condición por una que tenga sentido en tu página.
const filtros = document.querySelector("#filtros");

filtros.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-filtro]");
  if (!boton) return; // el clic fue en el contenedor, no en un botón

  if (boton.dataset.filtro === "baratas") {
    pintar(piezas.filter((pieza) => pieza.valor < 2000));
  } else {
    pintar(piezas);
  }
});
