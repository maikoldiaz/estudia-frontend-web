# Encuentro 2 · Una página en dos anchos

**Pregunta del día:** ¿cómo construyo una página que se lea en el celular y en el computador sin perder lo que la persona vino a hacer?

| Archivo | Qué es |
|---|---|
| [`feria-fija.html`](feria-fija.html) | Feria de Emprendedores de Belén con medidas fijas |
| [`feria-escondida.html`](feria-escondida.html) | La misma feria, "arreglada" para el celular |
| [`feria-cajas.html`](feria-cajas.html) | La misma feria con cajas explicables |
| [`caja.html`](caja.html) | Caja detective: ¿cuánto mide? |
| [`polideportivo.html`](polideportivo.html) | Práctica: Polideportivo La Ladera |
| [`mi-base/`](mi-base/) | Plantilla para tu página: `index.html` y `estilos.css` |

Las tres versiones de la feria tienen **el mismo HTML**; solo cambia el archivo `.css`.

## Cómo cambiar el ancho

- **En el celular:** abre el enlace ahí.
- **En el computador:** arrastra el borde de la ventana, o pulsa **F12** y luego **Ctrl+Shift+M** y escribe el ancho arriba (por ejemplo, 360).

## Caja detective

```css
.caja {
  width: 300px;
  padding: 20px;
  border: 10px solid;
  margin: 20px;
}
```

Antes de abrir `caja.html`: ¿cuánto mide de ancho en la pantalla? Después ábrela, pulsa F12 y pasa el mouse por la caja.

## Práctica: el polideportivo

Hagan la página angosta y ancha.

1. Anoten tres problemas: uno de **desbordamiento** (hay que mover de lado), uno de **legibilidad** (cuesta leer) y uno de **orden** (algo cambia de lugar).
2. Arreglen las cajas en F12 (clic derecho → Inspeccionar → panel Estilos). Al recargar todo vuelve: anoten lo que funcionó.
   - En `.clase`, añadan `box-sizing: border-box`. ¿Qué pasó con la tercera tarjeta?
   - En `body`, cambien `width: 900px` por `max-width: 900px`.
   - En `.foto`, cambien `width: 900px` por `width: 100%`.
   - En `body`, cambien `font-size: 13px` por `1rem`.
3. Al final del CSS hay una regla "para el celular de la coordinadora". Con la página en 320 y en 414 px, ¿sirve? ¿En qué ancho dejan de caber las tres tarjetas?

**Reto:** en `.dias`, escriban `display: grid` y `grid-template-columns: repeat(3, 1fr)`.

## Tu página

1. Crea una carpeta `mi-proyecto`.
2. Dentro, `index.html` con el contenido de [`mi-base/index.html`](mi-base/index.html). Cambia títulos, menú y secciones por los de tu esquema.
3. En la misma carpeta, `estilos.css` con el contenido de [`mi-base/estilos.css`](mi-base/estilos.css).
4. Pruébala en 360 y en 1280. Cambia el número de la media query por el ancho en que **tu contenido** tiene espacio.

Guarda (Ctrl+S) y recarga (F5) después de cada cambio. Si el CSS no se aplica: ¿están los dos archivos en la misma carpeta y con el nombre exacto?
