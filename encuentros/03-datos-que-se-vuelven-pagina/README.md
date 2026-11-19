# Encuentro 3 · Datos que se vuelven página

**Pregunta del día:** si cambia un dato, ¿cambia la página? ¿Qué tiene que pasar para que cambie?

| Archivo | Qué es |
|---|---|
| [`cafe-datos.html`](cafe-datos.html) | Café La Ladera: las preparaciones de la carta salen de una lista de datos (`cafe-datos.js`) |
| [`ejercicio-codigo-cafe.html`](ejercicio-codigo-cafe.html) | El código de la carta al lado de la página: entrada, transformación y salida |
| [`ejercicio-piezas.html`](ejercicio-piezas.html) | Cuatro piezas del JavaScript: let y const, flecha, desestructurar y plantilla. Predice y ejecuta |
| [`ejercicio-textcontent.html`](ejercicio-textcontent.html) | Un nombre con etiquetas: textContent o innerHTML |
| [`cafe-null.html`](cafe-null.html) | La misma carta, sin productos. ¿Qué le pasó? (pista: F12 → Console) |
| [`ejercicio-defer.html`](ejercicio-defer.html) | Las dos cartas lado a lado, sin y con `defer` |
| [`cafe-granos.html`](cafe-granos.html) | Práctica: Café La Ladera · café en grano |
| [`mi-app/`](mi-app/) | Plantilla para tu página: `app.js` y los cambios en tu `index.html` |

## Cómo abrir la consola

Pulsa **F12** y elige la pestaña **Console** (Consola). Escribe una línea y pulsa Enter. Si el navegador pide escribir «allow pasting» antes de pegar, escríbelo una vez. En el celular no hay consola: esta parte se hace en el computador.

## Práctica: el café en grano

Abre `cafe-granos.html` y su consola. **Antes de pulsar Enter, cada quien dice su predicción.**

1. **Filtrar.** Predigan cuántos cafés quedan y luego ejecuten:
   ```js
   pintar(granos.filter((g) => g.disponible))
   pintar(granos.filter((g) => g.tueste === "Oscuro"))
   ```
2. **Cambiar un dato.** Ejecuten `granos[0].disponible = false`. ¿Cambió la página? ¿Qué hace falta para que cambie? Vuelvan a filtrar los disponibles: ¿cuántos quedan ahora?
3. **La lista vacía.** Ejecuten:
   ```js
   pintar(granos.filter((g) => g.tueste === "Claro"))
   ```
   ¿Qué ve la persona? ¿Qué le falta a la página? Escriban el mensaje que la ayudaría: qué pasó y qué puede hacer.

**Reto:** escriban el filtro para «cafés de tueste oscuro disponibles» y predigan el resultado. Pista: `&&` significa «y».

## Tu página

1. Abre tu carpeta `mi-proyecto`. Crea al lado de `index.html` un archivo `app.js` con el contenido de [`mi-app/app.js`](mi-app/app.js).
2. Haz en tu `index.html` los dos cambios de [`mi-app/cambios-index.txt`](mi-app/cambios-index.txt).
3. **Datos:** cambia los objetos de ejemplo por tres a cinco de tu página, con las mismas propiedades en todos.
4. **Pintar:** guarda, recarga y comprueba que cada objeto aparece. Si cambiaste nombres de propiedades, cámbialos en `crearTarjeta`.
5. **Lista vacía:** escribe el aviso para cuando no haya nada. Pruébalo en la consola con `pintar([])`.
6. **Cambio de entrada:** cambia un dato en `app.js`, predice qué cambiará, guarda y recarga.

Si no aparece nada: F12 → Console. Si dice `null`, revisa que el `id` de tu HTML sea `lista` y que el script tenga `defer`.
