// ===== 1. Datos =====
let granos = [
  { nombre: "Urrao", region: "Antioquia", tueste: "Oscuro", precio: 32000, disponible: true },
  { nombre: "Pitalito", region: "Huila", tueste: "Medio", precio: 36000, disponible: false },
  { nombre: "La Unión", region: "Nariño", tueste: "Oscuro", precio: 38000, disponible: false },
  { nombre: "Minca", region: "Sierra Nevada", tueste: "Suave", precio: 40000, disponible: true },
  { nombre: "Planadas", region: "Tolima", tueste: "Medio", precio: 34000, disponible: true },
  { nombre: "Salento", region: "Quindío", tueste: "Suave", precio: 35000, disponible: true },
];

// ===== 2. Dónde se muestran =====
const contenedor = document.querySelector("#granos");
const conteo = document.querySelector("#conteo");

// ===== 3. Cómo se ve una bolsa =====
const crearTarjeta = ({ nombre, region, tueste, precio, disponible }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = disponible ? "bolsa" : "bolsa agotada"; // ? : elige entre dos valores

  const titulo = document.createElement("h3");
  titulo.textContent = `${nombre} · ${region}`;

  const datos = document.createElement("p");
  datos.textContent = `Tueste ${tueste.toLowerCase()} · $${precio.toLocaleString("es-CO")} la libra`;

  const estado = document.createElement("p");
  estado.className = "estado";
  estado.textContent = disponible ? "Disponible" : "Agotado";

  tarjeta.append(titulo, datos, estado);
  return tarjeta;
};

// ===== 4. Pintar =====
const pintar = (lista) => {
  contenedor.replaceChildren();
  conteo.textContent = `Mostrando ${lista.length} de ${granos.length} cafés`;
  lista.forEach((grano) => contenedor.append(crearTarjeta(grano)));
};

pintar(granos);
