// ===== 1. Datos =====
let libros = [
  { titulo: "El río que subía la montaña", autor: "Ana Lucía Ríos", categoria: "Infantil", disponible: true },
  { titulo: "Recetas de la abuela Carmen", autor: "Carmen Zapata", categoria: "Cocina", disponible: false },
  { titulo: "La bicicleta azul", autor: "Julián Restrepo", categoria: "Infantil", disponible: false },
  { titulo: "Noches en el Picacho", autor: "Marta Echeverri", categoria: "Novela", disponible: true },
  { titulo: "Huerta en el balcón", autor: "Diego Arango", categoria: "Cocina", disponible: true },
  { titulo: "Cartas desde la quebrada", autor: "Sofía Montoya", categoria: "Novela", disponible: true },
];

let apartados = [];

// ===== 2. Dónde se muestran =====
const contenedor = document.querySelector("#libros");
const conteo = document.querySelector("#conteo");
const formulario = document.querySelector("#form-apartar");
const campoLector = document.querySelector("#lector");
const campoLibro = document.querySelector("#libro");
const aviso = document.querySelector("#aviso");
const listaApartados = document.querySelector("#apartados");

// ===== 3. Cómo se ve un libro =====
const crearTarjeta = ({ titulo, autor, categoria, disponible }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = disponible ? "libro" : "libro prestado";

  const nombre = document.createElement("h3");
  nombre.textContent = titulo;

  const datos = document.createElement("p");
  datos.textContent = `${autor} · ${categoria}`;

  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = disponible ? "Disponible" : "Prestado o apartado";

  tarjeta.append(nombre, datos, estado);
  return tarjeta;
};

// ===== 4. Pintar =====
const pintar = (lista) => {
  contenedor.replaceChildren();
  conteo.textContent = `Mostrando ${lista.length} de ${libros.length} libros`;
  lista.forEach((libro) => contenedor.append(crearTarjeta(libro)));
};

const pintarApartados = () => {
  listaApartados.replaceChildren();
  apartados.forEach(({ lector, titulo }) => {
    const item = document.createElement("li");
    item.textContent = `${titulo} · para ${lector}`;
    listaApartados.append(item);
  });
};

// Las opciones del formulario: los libros disponibles al abrir la página.
libros
  .filter((libro) => libro.disponible)
  .forEach((libro) => {
    const opcion = document.createElement("option");
    opcion.textContent = libro.titulo;
    campoLibro.append(opcion);
  });

// ===== 5. Apartar =====
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const lector = campoLector.value.trim();
  const titulo = campoLibro.value;

  if (lector === "") {
    campoLector.style.borderColor = "red";
    return;
  }
  campoLector.style.borderColor = "";

  const libro = libros.find((l) => l.titulo === titulo);
  libro.disponible = false;
  apartados.push({ lector, titulo });

  pintar(libros);
  pintarApartados();
  aviso.textContent = "¡Solicitud enviada a la biblioteca! Te llegará un correo de confirmación.";
});

pintar(libros);
pintarApartados();
