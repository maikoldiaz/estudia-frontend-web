// ===== 1. Datos: lo que cambia cada temporada =====
// let: más adelante podríamos reemplazar la lista completa.
let productos = [
  { nombre: "Tinto de la casa", descripcion: "Café de origen de Urrao, colado en el momento.", precio: 2500, categoria: "Bebidas calientes" },
  { nombre: "Capuchino", descripcion: "Espresso doble con leche espumada y canela.", precio: 6000, categoria: "Bebidas calientes" },
  { nombre: "Pandebono", descripcion: "Recién horneado, con queso costeño y almidón de yuca.", precio: 3000, categoria: "Panadería" },
  { nombre: "Café frío con panela", descripcion: "Café filtrado en frío con panela y hielo.", precio: 7500, categoria: "Bebidas frías" },
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
  valor.textContent = `Desde $${precio.toLocaleString("es-CO")}`; // plantilla literal

  tarjeta.append(titulo, texto, valor);
  return tarjeta;
};

// ===== 4. Pintar: borra lo que hay y crea una tarjeta por producto =====
const pintar = (datos) => {
  lista.replaceChildren();
  if (datos.length === 0) {
    const aviso = document.createElement("p");
    aviso.className = "vacio";
    aviso.textContent = "No hay productos para mostrar. Sugiere uno en el formulario de abajo.";
    lista.append(aviso);
    return;
  }
  datos.forEach((producto) => lista.append(crearTarjeta(producto)));
};

pintar(productos);
