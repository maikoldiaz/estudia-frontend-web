// ===== 1. Datos: lo que ofrece el café =====
// let: más adelante podríamos reemplazar la lista completa.
let productos = [
  { nombre: "V60", descripcion: "Filtrado a mano, taza limpia y aromática. Con reserva.", precio: 9000, reserva: true },
  { nombre: "Kyoto drip", descripcion: "Goteo en frío durante horas. Con reserva.", precio: 12000, reserva: true },
  { nombre: "Siphon", descripcion: "Preparado al vacío frente a ti. Con reserva.", precio: 14000, reserva: true },
  { nombre: "Prensa francesa", descripcion: "Sin reserva y sin límite, hasta que cerremos.", precio: 5000, reserva: false },
];

// ===== 2. Dónde se muestran =====
// const: siempre es el mismo elemento de la página.
const lista = document.querySelector("#lista-productos");

// ===== 3. Cómo se ve un producto =====
// Recibe un objeto y saca de él solo lo que necesita (desestructuración).
const crearTarjeta = ({ nombre, descripcion, precio }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  const titulo = document.createElement("h3");
  titulo.textContent = nombre; // textContent: lo escribe como texto, nunca como HTML

  const texto = document.createElement("p");
  texto.textContent = descripcion;

  const valor = document.createElement("p");
  valor.className = "precio";
  valor.textContent = `$${precio.toLocaleString("es-CO")} la taza`; // plantilla literal

  tarjeta.append(titulo, texto, valor);
  return tarjeta;
};

// ===== 4. Pintar: borra lo que hay y crea una tarjeta por producto =====
const pintar = (datos) => {
  lista.replaceChildren();
  if (datos.length === 0) {
    const aviso = document.createElement("p");
    aviso.className = "vacio";
    aviso.textContent = "No hay preparaciones para mostrar. Pregunta en la barra qué hay hoy.";
    lista.append(aviso);
    return;
  }
  datos.forEach((producto) => lista.append(crearTarjeta(producto)));
};

pintar(productos);
