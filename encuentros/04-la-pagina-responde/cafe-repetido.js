// ===== 1. Datos: lo que el café ofrece y lo que ya se reservó hoy =====
let productos = [
  { nombre: "V60", descripcion: "Filtrado a mano, taza limpia y aromática.", precio: 9000, reserva: true },
  { nombre: "Kyoto drip", descripcion: "Goteo en frío durante horas.", precio: 12000, reserva: true },
  { nombre: "Siphon", descripcion: "Preparado al vacío frente a ti.", precio: 14000, reserva: true },
  { nombre: "Prensa francesa", descripcion: "Sin reserva y sin límite, hasta que cerremos.", precio: 5000, reserva: false },
];

let reservas = [
  { nombre: "Ana", metodo: "Kyoto drip", tazas: 2 },
];

const TAZAS_POR_DIA = 50;
const TAZAS_POR_PERSONA = 2;

// ===== 2. Dónde se muestran =====
const lista = document.querySelector("#lista-productos");
const filtros = document.querySelector("#filtros");
const formulario = document.querySelector("#form-reserva");
const campoNombre = document.querySelector("#nombre");
const campoMetodo = document.querySelector("#metodo");
const campoTazas = document.querySelector("#tazas");
const mensaje = document.querySelector("#mensaje");
const quedan = document.querySelector("#quedan");
const listaReservas = document.querySelector("#lista-reservas");

// ===== 3. Cómo se ven =====
const crearTarjeta = ({ nombre, descripcion, precio, reserva }) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  const titulo = document.createElement("h3");
  titulo.textContent = nombre;

  const texto = document.createElement("p");
  texto.textContent = descripcion;

  const valor = document.createElement("p");
  valor.className = "precio";
  valor.textContent = `$${precio.toLocaleString("es-CO")} la taza`;

  tarjeta.append(titulo, texto, valor);

  if (reserva) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "reservar";
    boton.dataset.nombre = nombre;
    boton.textContent = `Reservar ${nombre}`;
    tarjeta.append(boton);
  } else {
    const nota = document.createElement("p");
    nota.textContent = "Pídela en la barra, sin reserva.";
    tarjeta.append(nota);
  }
  return tarjeta;
};

const pintar = (datos) => {
  lista.replaceChildren();
  // Conecto el formulario aquí, junto a la carta.
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // sin esto, el navegador recarga la página y se pierde lo anotado

    const nombre = campoNombre.value.trim();
    const tazas = Number(campoTazas.value);
    const metodo = campoMetodo.value;

    limpiarMarcas();
    const problema = validar(nombre, tazas);
    if (problema) {
      mostrar("error", problema.texto);
      marcar(problema.campo);
      return;
    }

    reservas.push({ nombre, metodo, tazas });
    pintarReservas();
      mostrar("ok", `${tazas} ${palabraTazas(tazas)} de ${metodo} a nombre de ${nombre}. Es un ensayo: quedó en esta página y no se envió al café.`);
    campoNombre.focus();
  });

  if (datos.length === 0) {
    const aviso = document.createElement("p");
    aviso.className = "vacio";
    aviso.textContent = "No hay preparaciones con ese filtro. Pulsa «Todas» para ver la carta completa.";
    lista.append(aviso);
    return;
  }
  datos.forEach((producto) => lista.append(crearTarjeta(producto)));
};

// Suma las tazas de todas las reservas (o solo las de una persona).
const tazasHoy = () => {
  let total = 0;
  for (const r of reservas) total += r.tazas;
  return total;
};

const tazasDe = (nombre) => {
  let total = 0;
  for (const r of reservas) {
    if (r.nombre.toLowerCase() === nombre.toLowerCase()) total += r.tazas;
  }
  return total;
};

const palabraTazas = (n) => (n === 1 ? "taza" : "tazas");

const pintarReservas = () => {
  listaReservas.replaceChildren();
  reservas.forEach(({ nombre, metodo, tazas }) => {
    const item = document.createElement("li");
    item.textContent = `${nombre} · ${tazas} ${palabraTazas(tazas)} de ${metodo}`;
    listaReservas.append(item);
  });
  quedan.textContent = `Quedan ${TAZAS_POR_DIA - tazasHoy()} de ${TAZAS_POR_DIA} tazas con reserva para hoy.`;
};

// ===== 4. Mensajes: qué pasó y qué hacer, con palabras y no solo con color =====
const mostrar = (tipo, texto) => {
  const inicio = { error: "No se anotó: ", ok: "Listo: ", info: "" };
  mensaje.className = tipo;
  mensaje.textContent = inicio[tipo] + texto;
};

const marcar = (campo) => {
  campo.setAttribute("aria-invalid", "true");
  campo.focus();
};

const limpiarMarcas = () => {
  [campoNombre, campoTazas].forEach((campo) => campo.removeAttribute("aria-invalid"));
};

// ===== 5. Validar: devuelve el problema, o null si todo está bien =====
const validar = (nombre, tazas) => {
  if (nombre === "") {
    return { campo: campoNombre, texto: "escribe tu nombre para anotar la reserva." };
  }
  if (!Number.isInteger(tazas) || tazas < 1 || tazas > TAZAS_POR_PERSONA) {
    return { campo: campoTazas, texto: `puedes reservar 1 o ${TAZAS_POR_PERSONA} tazas.` };
  }
  const yaTiene = tazasDe(nombre);
  if (yaTiene + tazas > TAZAS_POR_PERSONA) {
    const puede = TAZAS_POR_PERSONA - yaTiene;
    const queHacer = puede > 0 ? `Puedes pedir ${puede} más.` : "Si es para otra persona, escribe su nombre.";
    return {
      campo: puede > 0 ? campoTazas : campoNombre,
      texto: `${nombre} ya tiene ${yaTiene} ${palabraTazas(yaTiene)} reservadas hoy y el máximo es ${TAZAS_POR_PERSONA} por persona. ${queHacer}`,
    };
  }
  const libres = TAZAS_POR_DIA - tazasHoy();
  if (tazas > libres) {
    return { campo: campoTazas, texto: `hoy solo ${libres === 1 ? "queda" : "quedan"} ${libres} ${palabraTazas(libres)} con reserva.` };
  }
  return null;
};

// ===== 6. Eventos =====

// Filtros: un solo listener en el contenedor (delegación).
filtros.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button[data-filtro]");
  if (!boton) return;
  filtros.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === boton)));
  const filtro = boton.dataset.filtro;
  if (filtro === "reserva") pintar(productos.filter((p) => p.reserva));
  else if (filtro === "sin-reserva") pintar(productos.filter((p) => !p.reserva));
  else pintar(productos);
});

// Botones «Reservar» de las tarjetas: también por delegación, porque las tarjetas se vuelven a crear al pintar.
lista.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button.reservar");
  if (!boton) return;
  campoMetodo.value = boton.dataset.nombre;
  mostrar("info", `Elegiste ${boton.dataset.nombre}. Escribe tu nombre y cuántas tazas quieres.`);
  campoNombre.focus();
});

pintar(productos);
pintarReservas();
