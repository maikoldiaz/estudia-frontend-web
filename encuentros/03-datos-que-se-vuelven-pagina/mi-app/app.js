// ===== 1. Datos: lo que cambia en tu página =====
// Cambia estos objetos por los tuyos (tres a cinco), con las mismas propiedades en todos.
// Ejemplos: productos con precio, actividades con día y hora, servicios con horario.
let piezas = [
  { nombre: "Pieza 1", detalle: "Un dato que la persona necesita", valor: 1000 },
  { nombre: "Pieza 2", detalle: "Un dato que la persona necesita", valor: 2000 },
  { nombre: "Pieza 3", detalle: "Un dato que la persona necesita", valor: 3000 },
];

// ===== 2. Dónde se muestran =====
// En tu index.html debe existir un elemento con id="lista".
const contenedor = document.querySelector("#lista");

// ===== 3. Cómo se ve una pieza =====
// Si cambiaste los nombres de las propiedades, cámbialos también aquí.
const crearTarjeta = ({ nombre, detalle, valor }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const titulo = document.createElement("h3");
  titulo.textContent = nombre;

  const texto = document.createElement("p");
  texto.textContent = detalle;

  const dato = document.createElement("p");
  dato.textContent = `Valor: ${valor}`;

  tarjeta.append(titulo, texto, dato);
  return tarjeta;
};

// ===== 4. Pintar la lista, o un aviso si está vacía =====
const pintar = (lista) => {
  contenedor.replaceChildren();
  if (lista.length === 0) {
    const aviso = document.createElement("p");
    aviso.textContent = "Escribe aquí qué debe hacer la persona cuando no hay nada que mostrar.";
    contenedor.append(aviso);
    return;
  }
  lista.forEach((pieza) => contenedor.append(crearTarjeta(pieza)));
};

pintar(piezas);
