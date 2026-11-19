# Encuentro 4 · La página responde

**Pregunta del día:** cuando la persona pulsa o escribe, ¿qué debe pasar? ¿Y cómo sabe si salió bien o mal?

| Archivo | Qué es |
|---|---|
| [`cafe-reservas.html`](cafe-reservas.html) | Café La Ladera con filtros, botones «Reservar» y un formulario que responde. Prueba un caso vacío, uno válido y uno repetido |
| [`ejercicio-submit.html`](ejercicio-submit.html) | El mismo formulario con y sin `preventDefault` |
| [`ejercicio-delegacion.html`](ejercicio-delegacion.html) | Un listener por botón o uno en el contenedor: ¿quién escucha a la preparación nueva? |
| [`cafe-repetido.html`](cafe-repetido.html) | La carta que reserva de más: filtra dos veces y luego reserva una sola vez |
| [`biblioteca-apartar.html`](biblioteca-apartar.html) | Práctica: Biblioteca de la Junta · aparta un libro |
| [`mi-app/`](mi-app/) | Plantilla para tu página: el formulario (`cambios-index.txt`), el bloque de eventos (`eventos.js`) y el reto de filtros (`filtros.js`) |

## Práctica: aparta un libro

Abre `biblioteca-apartar.html`. Recarguen una vez antes del primer caso; entre casos no recarguen. **Antes de pulsar «Apartar», cada quien dice qué espera ver.**

1. **Vacío:** pulsen «Apartar» sin nombre. ¿Sabe la persona qué corregir? ¿Dónde quedó el cursor?
2. **Válido:** aparten «Noches en el Picacho». Lean el mensaje completo. ¿Es verdad lo que dice?
3. **Repetido:** sin recargar, aparten otra vez el mismo libro con otro nombre. ¿Qué debería pasar? ¿Qué pasó?
4. **Mensajes:** para cada caso que falló, escriban el mensaje que debería salir: qué pasó y qué hacer.

| Caso | Entrada | Esperado | Observado | Mensaje que debería salir |
|---|---|---|---|---|
| Vacío | nombre en blanco | | | |
| Válido | un nombre y un libro disponible | | | |
| Repetido | el mismo libro otra vez | | | |

**Reto:** F12 → **Sources** → `biblioteca-apartar.js`. Encuentren la línea que escribe el mensaje del caso válido y la condición que falta para el caso repetido.

## Tu página

Trabajas sobre tu carpeta `mi-proyecto`, con el `app.js` del encuentro 3.

1. **Escuchar:** agrega a tu `index.html` el formulario y el párrafo del mensaje de [`mi-app/cambios-index.txt`](mi-app/cambios-index.txt). Pega [`mi-app/eventos.js`](mi-app/eventos.js) al final de tu `app.js`. Cambia los textos por los de tu página. Prueba el caso válido: ¿aparece la tarjeta nueva?
2. **Validar y responder:** prueba el caso vacío y el repetido. El mensaje dice qué pasó y qué hacer, el cursor vuelve al campo y el mensaje de éxito no dice que algo se envió.
3. **Tres casos:** recarga y prueba los tres desde el principio. Escribe lo que esperabas y lo que pasó en el registro del final de `app.js`.

Si no responde: F12 → Console. Si dice `null`, revisa que tu HTML tenga `id="formulario"`, `id="campo"` e `id="mensaje"`. Si la página parpadea y se borra lo agregado, falta `evento.preventDefault()`.
