// ===== 1. Datos =====
let libros = [
  { titulo: "El río que subía la montaña", autor: "Ana Lucía Ríos", categoria: "Infantil", paginas: 48, disponible: true },
  { titulo: "Recetas de la abuela Carmen", autor: "Carmen Zapata", categoria: "Cocina", paginas: 160, disponible: false },
  { titulo: "La bicicleta azul", autor: "Julián Restrepo", categoria: "Infantil", paginas: 32, disponible: false },
  { titulo: "Noches en el Picacho", autor: "Marta Echeverri", categoria: "Novela", paginas: 284, disponible: true },
  { titulo: "Huerta en el balcón", autor: "Diego Arango", categoria: "Cocina", paginas: 96, disponible: true },
  { titulo: "Cartas desde la quebrada", autor: "Sofía Montoya", categoria: "Novela", paginas: 212, disponible: true },
];

// ===== 2. Dónde se muestran =====
const contenedor = document.querySelector("#libros");
const conteo = document.querySelector("#conteo");

// ===== 3. Cómo se ve un libro =====
const crearTarjeta = ({ titulo, autor, categoria, disponible }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = disponible ? "libro" : "libro prestado"; // ? : elige entre dos valores

  const nombre = document.createElement("h3");
  nombre.textContent = titulo;

  const datos = document.createElement("p");
  datos.textContent = `${autor} · ${categoria}`;

  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = disponible ? "Disponible" : "Prestado";

  tarjeta.append(nombre, datos, estado);
  return tarjeta;
};

// ===== 4. Pintar =====
const pintar = (lista) => {
  contenedor.replaceChildren();
  conteo.textContent = `Mostrando ${lista.length} de ${libros.length} libros`;
  lista.forEach((libro) => contenedor.append(crearTarjeta(libro)));
};

pintar(libros);
