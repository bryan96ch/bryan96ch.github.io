---
name: SysDevUp
description: Sistema de gestión por módulos para negocios en Ecuador, dibujado como un mapa de líneas con facturación de transbordo.
colors:
  marino: "#071a33"
  marino-2: "#0d2647"
  marino-3: "#04101f"
  tinta: "#0f1f36"
  tinta-suave: "#475a74"
  claro: "#f3f6fb"
  blanco: "#ffffff"
  sobre-oscuro: "#c9d6ea"
  foco: "#1d5fc4"
  foco-oscuro: "#ffd166"
  fac: "#3d8bff"
  fac-texto: "#1d5fc4"
  fac-tinte: "#e8f0fd"
  inv: "#2bb673"
  inv-texto: "#12805a"
  inv-tinte: "#e3f5ec"
  con: "#f2b31b"
  con-texto: "#946500"
  con-tinte: "#fdf3dc"
  cli: "#ff6b4a"
  cli-texto: "#c23f27"
  cli-tinte: "#fde9e3"
  st: "#9b7bff"
  st-texto: "#6744c4"
  st-tinte: "#efe9fd"
typography:
  display:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 8.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontFeature: "tnum"
  headline-portada:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  precio-modulo:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  bajada:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  foco: "6px"
  boton-icono: "14px"
  fila: "16px"
  panel: "22px"
  tarjeta: "28px"
  banda: "clamp(36px, 6vw, 72px)"
  pildora: "999px"
spacing:
  margen: "clamp(1.25rem, 4vw, 2.5rem)"
  hueco: "clamp(2.5rem, 5vw, 4.5rem)"
  seccion: "clamp(4rem, 9vw, 7.5rem)"
  tarjeta: "clamp(1.5rem, 3vw, 2.1rem)"
  gap: "1rem"
components:
  boton-claro:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.marino}"
    typography: "{typography.label}"
    rounded: "{rounded.pildora}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  boton-claro-hover:
    backgroundColor: "{colors.fac-tinte}"
    textColor: "{colors.marino}"
  boton-oscuro:
    backgroundColor: "{colors.marino}"
    textColor: "{colors.blanco}"
    typography: "{typography.label}"
    rounded: "{rounded.pildora}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  boton-oscuro-hover:
    backgroundColor: "{colors.marino-2}"
    textColor: "{colors.blanco}"
  boton-chico:
    typography: "{typography.label}"
    rounded: "{rounded.pildora}"
    padding: "0.6rem 1.15rem"
    height: "2.6rem"
  tarjeta-modulo:
    backgroundColor: "{colors.fac-tinte}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.tarjeta}"
    padding: "{spacing.tarjeta}"
  chip-conexion:
    backgroundColor: "rgba(255,255,255,.75)"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pildora}"
    padding: "0.3rem 0.75rem 0.3rem 0.45rem"
  nav-enlace:
    textColor: "{colors.blanco}"
    rounded: "{rounded.pildora}"
    padding: "0.6rem 0.85rem"
  panel-productos:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.panel}"
    padding: "0.6rem"
  fila-producto-hover:
    backgroundColor: "{colors.claro}"
    rounded: "{rounded.fila}"
    padding: "0.8rem 0.9rem"
---

# Design System: SysDevUp

## Overview

**Creative North Star: "El mapa de líneas"**

SysDevUp se dibuja como el plano de un metro de Quito: facturación electrónica es la estación de transbordo y cada módulo (inventario, contabilidad, consultorios, servicio técnico) es una línea con su propio color que sale de ella. El mapa no es una ilustración decorativa sino la gramática entera del sistema: líneas gruesas de color saturado, estaciones redondas con relleno blanco y borde de color, y conexiones que se ven. Donde haga falta mostrar que algo se relaciona con otra cosa, se dibuja una línea que llega a una estación, no una flecha ni una tarjeta más.

El ritmo es de bandas: azul marino profundo arriba (cabecera y portada) y al final (cierre), secciones claras en blanco y gris azulado en medio, y una costura muy redondeada donde el marino se encuentra con lo claro. La densidad es holgada, con secciones altas y titulares grandes pero sin gritar; Barlow lleva todo el texto y el único momento de tipografía enorme es el precio. Los botones son píldoras, las tarjetas tienen radio grande y van teñidas del color de su línea.

Rechazos confirmados: tarjetas iguales con ilustración genérica (el contrato de dirección lo nombra), capturas del sistema y fotos (PRODUCT.md exige ilustraciones propias), y animación que esconda contenido.

**Key Characteristics:**
- Un color por módulo, en tres registros: línea sobre oscuro, texto sobre claro y tinte de fondo.
- Facturación siempre al centro y siempre azul: es el transbordo del que salen las demás líneas.
- Bandas marino arriba y abajo con costura redondeada; secciones claras en medio.
- Barlow autoalojada de 400 a 700; titulares a 600, el precio a 700.
- Píldoras para toda acción; radio grande (28px) para tarjetas.
- Sin JS o con movimiento reducido, el mapa queda entero encendido y quieto.

## Colors

Un marino casi negro como escenario, neutros fríos en lo claro y cinco colores de línea saturados que solo se usan para identificar un módulo.

### Primary
- **Marino de portada** (`marino`): fondo de la cabecera, la portada y la banda de cierre. Es el escenario del mapa: las líneas saturadas solo brillan sobre él. También es el fondo del botón oscuro sobre secciones claras.
- **Azul transbordo** (`fac`): la línea de facturación electrónica, el anillo de la estación de transbordo, el tronco que une las tarjetas de módulo y la línea de los pasos de «Cómo empezar». Es el color de la marca en movimiento.

### Secondary
Los cuatro colores de línea de los módulos. Cada uno se usa en tres registros y nunca fuera de su módulo:
- **Verde inventario** (`inv`, texto `inv-texto`, tinte `inv-tinte`).
- **Ámbar contabilidad** (`con`, texto `con-texto`, tinte `con-tinte`).
- **Coral consultorios** (`cli`, texto `cli-texto`, tinte `cli-tinte`).
- **Violeta servicio técnico** (`st`, texto `st-texto`, tinte `st-tinte`).

El registro de **línea** (`fac`, `inv`…) va en trazos, bordes de estación y puntos; tiene el brillo necesario sobre marino y no se usa como color de texto sobre blanco. El registro de **texto** (`*-texto`) es la versión oscurecida que sí lee sobre claro: precios y enlaces «Ver» de cada tarjeta. El **tinte** (`*-tinte`) es el fondo de la tarjeta del módulo y el hover del botón claro.

### Neutral
- **Tinta** (`tinta`): texto de cuerpo y titulares sobre claro.
- **Tinta suave** (`tinta-suave`): bajadas de sección, descripciones y texto secundario sobre claro. Dentro de una tarjeta teñida el párrafo se mezcla con el color de texto del módulo (38 % del `*-texto` sobre `tinta`, en oklab) para que no se vea gris sobre el tinte.
- **Sobre oscuro** (`sobre-oscuro`): texto secundario sobre marino (bajada, leyenda del mapa, precios del mapa, pie).
- **Claro** (`claro`): fondo de las secciones claras alternas («Cómo empezar») y hover de las filas del menú.
- **Blanco** (`blanco`): fondo por defecto de las secciones claras, relleno de estaciones y del botón claro.
- **Marino 2** (`marino-2`): solo el hover del botón oscuro.
- **Marino hondo** (`marino-3`): fondo del pie, un escalón más abajo que el cierre.
- **Foco** (`foco`) y **foco sobre oscuro** (`foco-oscuro`): el anillo de foco de teclado; sobre marino cambia a amarillo para no perderse entre las líneas.

### Named Rules
**La regla de la línea propia.** Cada color de línea pertenece a un solo módulo y aparece solo donde está ese módulo: su línea, su estación, su tarjeta, su punto en una lista de conexiones. Ningún color de línea se usa como acento decorativo.

**La regla de los tres registros.** Sobre marino va el color de línea; sobre blanco el texto usa `*-texto`; una superficie del módulo usa `*-tinte`. No se cruzan: el color de línea no se usa para texto sobre claro.

**La regla del transbordo azul.** Facturación es siempre `fac` y siempre está en el centro o en el tronco. Cuando algo conecta módulos, lo conecta pasando por azul.

## Typography

**Display Font:** Barlow (con system-ui, sans-serif), autoalojada en `fonts/`, pesos 400, 500, 600 y 700, `font-display: swap`.
**Body Font:** Barlow, la misma familia.

**Character:** una grotesca de señalética, algo condensada, que recuerda a los rótulos de transporte: sirve igual para el nombre de una estación en el mapa que para un párrafo. Una sola familia; la jerarquía sale del tamaño y el peso.

### Hierarchy
- **Display** (700, clamp(3.6rem, 8.4vw, 6rem), 0.95): el precio de la portada, «$19». Es lo más grande de la página, con cifras tabulares; «desde» y «al año» van a 0,42em y 600 en `sobre-oscuro`.
- **Headline portada** (600, clamp(2.4rem, 4.6vw, 3.6rem), 1.05): el h1 de la portada.
- **Headline** (600, clamp(2rem, 3.8vw, 2.9rem), 1.1, -0.02em): los h2 de sección; el cierre sube a clamp(2.1rem, 4.4vw, 3.4rem).
- **Title** (600, clamp(1.45rem, 2.2vw, 1.75rem), 1.1): nombre de cada tarjeta de módulo; la de facturación sube a clamp(1.9rem, 3.2vw, 2.5rem). Los pasos usan 1.4rem.
- **Precio de módulo** (700, 2.1rem, 1, cifras tabulares): el precio dentro de cada tarjeta, en el `*-texto` de su línea; en facturación sube a clamp(2.6rem, 4.6vw, 3.4rem).
- **Bajada** (400, clamp(1.1rem, 1.6vw, 1.3rem), 1.5): el párrafo bajo el h1, máximo 34rem.
- **Body** (400, 1.0625rem, 1.6): texto corriente; las bajadas de sección van a 1.15rem y hasta 38rem de ancho.
- **Label** (600, 0.95rem, 0.05em, MAYÚSCULAS): solo el texto de los botones en píldora y los títulos de columna del pie.
- **Rótulo de mapa** (600 19px para la estación, 600 14.5px para su precio, 500 15px para las paradas intermedias): texto dentro del SVG; en celular sube a 24px y 19px y las paradas intermedias se ocultan.

### Named Rules
**La regla del precio más grande.** Los precios van a 700 con cifras tabulares (`font-variant-numeric: tabular-nums`) y son el elemento tipográfico más pesado de su bloque. Es la única excepción al 600 de los titulares, por decisión registrada.

**La regla de un solo peso de titular.** h1, h2 y h3 van a 600, interlineado 1.1 o menos, interletrado negativo y `text-wrap: balance`. No hay titulares a 700 ni a 800.

## Layout

Contenedor de hasta 1200px con márgenes laterales fluidos (`margen`). Las secciones claras tienen un relleno vertical generoso (`seccion`); la cabecera de cada sección limita su ancho a 44rem y su bajada a 38rem.

La primera pantalla es una grilla 7/5: titular, bajada y acciones a la izquierda; el mapa SVG a la derecha. Debajo, separada por un filete blanco al 12 %, una fila de cuatro garantías con ícono de trazo.

Los módulos se ordenan como el mapa: la tarjeta de facturación a la izquierda, más grande y pegajosa (sticky a 6.5rem), y las otras cuatro apiladas a la derecha como ramales. Un tronco azul vertical recorre el hueco entre columnas (`hueco`) y cada ramal llega a su tarjeta con un tramo horizontal del color de su línea, a la altura del eje del título.

Los pasos de «Cómo empezar» son tres estaciones numeradas sobre una línea azul horizontal; en celular la línea pasa a vertical a la izquierda.

Puntos de quiebre: 1100px (garantías a dos columnas), 960px (menú móvil, portada a una columna, módulos apilados con el tronco a la izquierda, WhatsApp flotante), 720px (pasos verticales, garantías a una columna, dibujos de módulo a 64px), 480px (botones de la portada a ancho completo, pie a una columna).

## Elevation & Depth

Plano por defecto. La profundidad la dan las bandas de color (marino contra claro) y los tintes, no las sombras. Las sombras existen solo en tres casos: los botones en píldora (una sombra corta y difusa debajo), las capas que flotan (menú de productos, panel móvil, WhatsApp flotante) y la tarjeta de módulo cuando se le pasa el cursor, que sube 3px y gana una sombra amplia y suave.

### Shadow Vocabulary
- **Botón claro** (`box-shadow: 0 6px 18px -8px rgba(0,0,0,.45)`): bajo la píldora blanca sobre marino.
- **Botón oscuro** (`box-shadow: 0 8px 20px -10px rgba(7,26,51,.6)`): bajo la píldora marino sobre claro.
- **Tarjeta levantada** (`box-shadow: 0 22px 40px -24px rgba(7,26,51,.35)`): solo en hover de la tarjeta de módulo, con `translateY(-3px)`.
- **Panel flotante** (`box-shadow: 0 24px 48px -16px rgba(4,16,31,.45), 0 2px 6px rgba(4,16,31,.12)`): el desplegable de productos.

### Named Rules
**La regla del plano en reposo.** Ninguna superficie lleva sombra en reposo salvo las píldoras y lo que flota sobre la página. Una tarjeta se levanta solo como respuesta al cursor.

## Shapes

Todo es redondo. Las acciones son píldoras completas (999px); las tarjetas de módulo y el bloque de automatización usan radio grande (28px); el panel del menú 22px y sus filas 16px. Las bandas marino tienen sus esquinas que tocan lo claro redondeadas de clamp(36px, 6vw, 72px): la portada abajo, el cierre arriba.

La gramática del mapa tiene medidas propias:
- **Línea**: trazo de 9px, extremos y uniones redondeados, solo tramos rectos y diagonales a 45°. Al señalarla engrosa a 12px.
- **Estación terminal**: círculo blanco con borde de 5px del color de su línea (radio 12 en el SVG, 15 al señalarla).
- **Parada intermedia**: círculo marino con borde de 4px del color de su línea (radio 7).
- **Transbordo**: círculo blanco con borde azul de 8px (radio 26), el más grande del mapa.
- **Punto de estación en HTML**: círculo blanco con borde del color de la línea, en cuatro tamaños (34/8px en la tarjeta de facturación, 26/6px en los ramales, 16/4px en el menú, 12/3px en las conexiones) y una viñeta de 10/3px para las listas de lo que incluye.
- **Paso numerado**: estación de 54px con borde azul de 6px y el número a 700.

### Named Rules
**La regla de la estación.** Todo marcador del sistema (viñeta, punto de menú, paso, nodo) es una estación: círculo de relleno blanco con borde del color de su línea. No hay viñetas sólidas, chulos ni cuadrados.

## Components

### Buttons
Píldoras firmes, en mayúsculas espaciadas; la única acción principal casi siempre es WhatsApp.
- **Shape:** píldora completa (999px), alto mínimo 3.25rem.
- **Claro:** fondo blanco, texto marino; es el botón sobre bandas marino (WhatsApp de la portada y del cierre, cabecera). Puede llevar el ícono de WhatsApp en SVG a 1.25rem.
- **Oscuro:** fondo marino, texto blanco; es el botón sobre secciones claras.
- **Chico:** 2.6rem de alto y 0.85rem de texto, para la cabecera.
- **Hover / Focus:** sube 1px y cambia de fondo (claro a `fac-tinte`, oscuro a `marino-2`); al presionar vuelve a su sitio. Foco: anillo de 3px a 3px de separación.
- **Enlace con flecha:** la acción secundaria («Ver planes de facturación») es texto a 600 con una flecha SVG que se corre 3px al pasar el cursor, nunca un segundo botón.

### Chips
- **Style:** las conexiones de cada tarjeta («Se conecta con…») son píldoras blancas al 75 % sobre el tinte, texto 0.88rem a 500, con el punto de estación de 12px del módulo conectado al inicio.
- **State:** son informativas, sin estado.

### Cards / Containers
- **Corner Style:** radio grande (28px).
- **Background:** el tinte de su línea (`*-tinte`); nunca blanco sobre blanco.
- **Shadow Strategy:** plana en reposo; en hover, la tarjeta levantada (ver Elevation).
- **Border:** ninguno; la conexión la da el tramo de línea que llega desde el tronco y el punto de estación sobre su borde izquierdo.
- **Internal Padding:** clamp(1.5rem, 3vw, 2.1rem); facturación clamp(1.75rem, 3.5vw, 2.75rem).
- **Contenido:** título enlazado (toda la tarjeta es clicable mediante el enlace del título), párrafo, precio en `*-texto`, conexiones, enlace «Ver» en `*-texto` y el dibujo propio del módulo a la derecha.
- **Contenedor de contorno:** el bloque de automatización va sin tinte, con filete de 1px y el mismo radio de 28px, porque no es un módulo y no tiene línea.

### Navigation
- **Cabecera:** pegajosa, fondo marino, 4.75rem de alto, logo blanco a 54px a la izquierda.
- **Enlaces:** blancos a 500, en píldora transparente que se aclara (blanco al 10 %) en hover o abierta. «Acceder al sistema» va en `sobre-oscuro` porque es para quien ya es cliente. Cierra con el botón claro chico de WhatsApp.
- **Productos:** un `details` nativo que abre un panel blanco de 22px de radio con una fila por módulo: punto de estación, nombre a 600, descripción en `tinta-suave` y precio tabular a la derecha. Se cierra con Escape, clic fuera o al salir el foco.
- **Móvil (≤960px):** hamburguesa de 48px en un `details`; el panel baja sobre marino, con la misma lista de productos en una tarjeta blanca de 20px, los demás enlaces en blanco y el botón de WhatsApp. Aparece además un botón flotante de WhatsApp de 58px abajo a la derecha, visible solo cuando la portada sale de la vista.

### El mapa de líneas (componente firma)
SVG en la portada: facturación al centro como transbordo y cuatro líneas que salen de ella hacia su estación terminal, cada una con una parada intermedia que nombra lo que comparte con facturación. Cada estación es un enlace a su página, con rótulo, precio y `aria-label` completo; debajo, una leyenda con filete izquierdo que explica la estación señalada.
- **Reposo:** las líneas a opacidad completa.
- **Al señalar una estación** (cursor o foco): las demás líneas bajan a 16 % de opacidad, la suya sube a 12px y la leyenda cambia. Señalar el transbordo enciende todas.
- **Táctil:** el primer toque enciende la línea y explica; el segundo abre la página.
- **Recorrido de entrada:** con JS y sin movimiento reducido, al entrar el mapa en vista (30 %) las líneas parten apagadas y se encienden una a una cada 900ms (inventario, contabilidad, consultorios, servicio técnico), y al terminar quedan todas encendidas. Cualquier interacción lo detiene.
- **Sin JS o con movimiento reducido:** el mapa está entero encendido y quieto; nada depende del recorrido para verse.

## Do's and Don'ts

### Do:
- **Do** dibujar cualquier relación entre módulos como una línea de 9px que llega a una estación de relleno blanco y borde de color.
- **Do** poner facturación en azul (`fac`) y en el centro o el tronco de cualquier composición de módulos.
- **Do** usar el color de cada módulo en sus tres registros: línea sobre marino, `*-texto` sobre claro, `*-tinte` de fondo.
- **Do** abrir y cerrar cada página con bandas marino de costura redondeada (clamp(36px, 6vw, 72px)) y dejar el medio en blanco y `claro`.
- **Do** poner los precios a 700 con cifras tabulares y hacerlos lo más grande de su bloque.
- **Do** usar píldoras para toda acción: botón claro sobre marino, botón oscuro sobre claro.
- **Do** dejar el contenido visible sin JS y con `prefers-reduced-motion`: la animación solo puede llevar algo de encendido a encendido, nunca de oculto a visible.
- **Do** usar los dibujos propios de cada módulo (`media/img/hero-*.svg`) y los íconos de trazo en SVG.

### Don't:
- **Don't** hacer tarjetas de módulo iguales: cada una lleva el tinte de su línea y su punto de estación, y facturación es más grande.
- **Don't** usar un color de línea fuera de su módulo, ni como texto sobre blanco.
- **Don't** usar capturas del sistema ni fotos; las imágenes son ilustraciones propias.
- **Don't** poner sombras en reposo sobre tarjetas o secciones; la profundidad la dan las bandas y los tintes.
- **Don't** subir los titulares a 700 u 800; el 700 es solo para precios.
- **Don't** usar viñetas sólidas, chulos o cuadrados como marcadores; todo marcador es una estación.
- **Don't** traer al sistema los colores, fuentes ni componentes de `css/style.min.css`: las páginas que aún lo usan no son este mundo.
