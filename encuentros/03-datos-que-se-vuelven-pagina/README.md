# Encuentro 3 · Datos que se vuelven página

**Pregunta del día:** si cambia un dato, ¿cambia la página? ¿Qué tiene que pasar para que cambie?

| Archivo | Qué es |
|---|---|
| [`feria-datos.html`](feria-datos.html) | Feria de Emprendedores de Belén: los puestos salen de una lista de datos (`feria-datos.js`) |
| [`feria-null.html`](feria-null.html) | La misma feria, sin puestos. ¿Qué le pasó? (pista: F12 → Console) |
| [`biblioteca.html`](biblioteca.html) | Práctica: Biblioteca de la Junta · Robledo |
| [`mi-app/`](mi-app/) | Plantilla para tu página: `app.js` y los cambios en tu `index.html` |

## Cómo abrir la consola

Pulsa **F12** y elige la pestaña **Console** (Consola). Escribe una línea y pulsa Enter. Si el navegador pide escribir «allow pasting» antes de pegar, escríbelo una vez. En el celular no hay consola: esta parte se hace en el computador.

## Práctica: la biblioteca

Abre `biblioteca.html` y su consola. **Antes de pulsar Enter, cada quien dice su predicción.**

1. **Filtrar.** Predigan cuántos libros quedan y luego ejecuten:
   ```js
   pintar(libros.filter((l) => l.disponible))
   pintar(libros.filter((l) => l.categoria === "Infantil"))
   ```
2. **Cambiar un dato.** Ejecuten `libros[0].disponible = false`. ¿Cambió la página? ¿Qué hace falta para que cambie? Vuelvan a filtrar los disponibles: ¿cuántos quedan ahora?
3. **La lista vacía.** Ejecuten:
   ```js
   pintar(libros.filter((l) => l.categoria === "Poesía"))
   ```
   ¿Qué ve la persona? ¿Qué le falta a la página? Escriban el mensaje que la ayudaría: qué pasó y qué puede hacer.

**Reto:** escriban el filtro para «libros infantiles disponibles» y predigan el resultado. Pista: `&&` significa «y».

## Tu página

1. Abre tu carpeta `mi-proyecto`. Crea al lado de `index.html` un archivo `app.js` con el contenido de [`mi-app/app.js`](mi-app/app.js).
2. Haz en tu `index.html` los dos cambios de [`mi-app/cambios-index.txt`](mi-app/cambios-index.txt).
3. **Datos:** cambia los objetos de ejemplo por tres a cinco de tu página, con las mismas propiedades en todos.
4. **Pintar:** guarda, recarga y comprueba que cada objeto aparece. Si cambiaste nombres de propiedades, cámbialos en `crearTarjeta`.
5. **Lista vacía:** escribe el aviso para cuando no haya nada. Pruébalo en la consola con `pintar([])`.
6. **Cambio de entrada:** cambia un dato en `app.js`, predice qué cambiará, guarda y recarga.

Si no aparece nada: F12 → Console. Si dice `null`, revisa que el `id` de tu HTML sea `lista` y que el script tenga `defer`.
