// ===== 1. Datos: lo que cambia cada mes =====
// let: más adelante podríamos reemplazar la lista completa.
let puestos = [
  { nombre: "Arepas La Tía Gloria", descripcion: "Arepas de chócolo y de queso hechas en el puesto.", precio: 4000, categoria: "Comida" },
  { nombre: "Tejidos Manos de Belén", descripcion: "Mochilas y bufandas tejidas a mano por un grupo de vecinas.", precio: 25000, categoria: "Artesanías" },
  { nombre: "Huerta El Rodeo", descripcion: "Plántulas de hortalizas, aromáticas y abono de lombriz.", precio: 3000, categoria: "Plantas" },
  { nombre: "Dulces de Doña Rosa", descripcion: "Cocadas, panelitas y obleas con arequipe.", precio: 2000, categoria: "Comida" },
];

// ===== 2. Dónde se muestran =====
// const: siempre es el mismo elemento de la página.
const lista = document.querySelector("#lista-puestos");

// ===== 3. Cómo se ve un puesto =====
// Recibe un objeto y saca de él solo lo que necesita (desestructuración).
const crearTarjeta = ({ nombre, descripcion, precio }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "puesto";

  const titulo = document.createElement("h3");
  titulo.textContent = nombre; // textContent: lo escribe como texto, nunca como HTML

  const texto = document.createElement("p");
  texto.textContent = descripcion;

  const valor = document.createElement("p");
  valor.className = "precio";
  valor.textContent = `Desde $${precio.toLocaleString("es-CO")}`; // plantilla literal

  tarjeta.append(titulo, texto, valor);
  return tarjeta;
};

// ===== 4. Pintar: borra lo que hay y crea una tarjeta por puesto =====
const pintar = (datos) => {
  lista.replaceChildren();
  if (datos.length === 0) {
    const aviso = document.createElement("p");
    aviso.className = "vacio";
    aviso.textContent = "Este mes todavía no hay puestos con eso. Mira las otras categorías o inscribe el tuyo abajo.";
    lista.append(aviso);
    return;
  }
  datos.forEach((puesto) => lista.append(crearTarjeta(puesto)));
};

pintar(puestos);
