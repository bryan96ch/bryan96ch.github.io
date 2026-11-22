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
  borde: "#dbe3ee"
  riel-hoy: "#cfd8e5"
  blanco: "#ffffff"
  sobre-oscuro: "#c9d6ea"
  foco: "#1d5fc4"
  foco-oscuro: "#ffd166"
  whatsapp: "#25d366"
  dibujo-tinta: "#1c2b3f"
  dibujo-gris: "#5a6b80"
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
  headline-producto:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.2vw, 3.3rem)"
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
  precio-plan:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 3.6vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  precio-modulo:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  pregunta:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.35
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
  label-rotulo:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  foco: "6px"
  boton-icono: "14px"
  fila: "16px"
  aviso: "20px"
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
  whatsapp-flotante:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pildora}"
    size: "58px"
  tarjeta-modulo:
    backgroundColor: "{colors.fac-tinte}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.tarjeta}"
    padding: "{spacing.tarjeta}"
  plan:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.tarjeta}"
    padding: "2.1rem 1.6rem 1.6rem"
  plan-etiqueta:
    backgroundColor: "{colors.fac-texto}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pildora}"
    padding: "0.38rem 0.95rem"
  aviso:
    backgroundColor: "{colors.fac-tinte}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.aviso}"
    padding: "1.15rem 1.35rem"
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

El mundo nació en la portada y hoy cubre todo el sitio: cinco páginas de producto, dos páginas legales y el inicio comparten la misma base marino, la misma cabecera, el mismo pie y la misma gramática de estaciones. Lo único que cambia de una página a otra es el color de su módulo, que entra por la clase del `body` (`c-fac`, `c-inv`, `c-con`, `c-cli`, `c-st`) y solo aparece como resplandor detrás del dibujo, como línea y como tinte. Las páginas de producto se leen como un «antes y después»: cómo trabaja hoy el cliente, y el mismo trabajo llegando a una estación del color del módulo.

Rechazos confirmados: tarjetas iguales con ilustración genérica (el contrato de dirección lo nombra), capturas del sistema y fotos (PRODUCT.md exige ilustraciones propias), animación que esconda contenido, y una identidad distinta por página.

**Key Characteristics:**
- Un color por módulo, en tres registros: línea sobre oscuro, texto sobre claro y tinte de fondo.
- Facturación siempre al centro y siempre azul: es el transbordo del que salen las demás líneas.
- Bandas marino arriba y abajo con costura redondeada; secciones claras en medio.
- Una sola identidad en todas las páginas: base marino; el color del producto solo como resplandor, línea y tinte.
- Barlow autoalojada de 400 a 700; titulares a 600, los precios a 700.
- Píldoras para toda acción; radio grande (28px) para tarjetas y planes, 20–22px para avisos y paneles.
- Los textos ocupan todo el ancho del contenedor; ningún párrafo lleva ancho máximo.
- Sin JS o con movimiento reducido, el mapa queda entero encendido y quieto.

## Colors

Un marino casi negro como escenario, neutros fríos en lo claro y cinco colores de línea saturados que solo se usan para identificar un módulo.

### Primary
- **Marino de portada** (`marino`): fondo de la cabecera, la portada, la portada legal y la banda de cierre. Es el escenario del mapa: las líneas saturadas solo brillan sobre él. También es el fondo del botón oscuro sobre secciones claras, incluido el botón de cada plan.
- **Azul transbordo** (`fac`): la línea de facturación electrónica, el anillo de la estación de transbordo, el tronco que une las tarjetas de módulo, la línea de los pasos de «Cómo empezar» y la estación «Inicio» de las migas en todas las páginas. Es el color de la marca en movimiento.

### Secondary
Los cuatro colores de línea de los módulos. Cada uno se usa en tres registros y nunca fuera de su módulo:
- **Verde inventario** (`inv`, texto `inv-texto`, tinte `inv-tinte`).
- **Ámbar contabilidad** (`con`, texto `con-texto`, tinte `con-tinte`).
- **Coral consultorios** (`cli`, texto `cli-texto`, tinte `cli-tinte`).
- **Violeta servicio técnico** (`st`, texto `st-texto`, tinte `st-tinte`).

El registro de **línea** (`fac`, `inv`…) va en trazos, bordes de estación, puntos y el resplandor de la portada; tiene el brillo necesario sobre marino y no se usa como color de texto sobre blanco. El registro de **texto** (`*-texto`) es la versión oscurecida que sí lee sobre claro: precios de las tarjetas, enlaces «Ver», íconos y enlaces de los avisos, el ícono de las preguntas, la cabecera «Con SysDevUp», el borde y la pestaña del plan recomendado. El **tinte** (`*-tinte`) es el fondo de la tarjeta del módulo, de los avisos y el hover del botón claro.

En una página, los tres registros llegan como variables de página: `--c` (línea), `--ct` (texto) y `--tinte`, puestas por la clase del `body`. Todo componente de producto los lee de ahí y no nombra un módulo; así la misma pieza sirve en las cinco páginas. Las páginas legales usan `c-fac`.

### Neutral
- **Tinta** (`tinta`): texto de cuerpo y titulares sobre claro.
- **Tinta suave** (`tinta-suave`): bajadas de sección, descripciones, la columna «Hoy», las respuestas de las preguntas y el texto secundario sobre claro. Sobre un tinte, o como letra chica de una fila del «después», el secundario se deriva del módulo: `color-mix(in oklab, var(--ct) 38%, var(--tinta))`, con `tinta-suave` como respaldo, para que no se vea gris sobre el color.
- **Borde** (`borde`): el filete de 1px del sistema. Separa las filas del antes y después, las de «Todo lo que incluye», las preguntas, las secciones legales, los cupos del plan; contornea las tarjetas de plan y el bloque de automatización. Es la única línea fina sobre claro.
- **Riel de hoy** (`riel-hoy`): el tramo gris con que empieza cada fila del antes y después, antes de volverse del color del módulo.
- **Sobre oscuro** (`sobre-oscuro`): texto secundario sobre marino (bajada, migas, leyenda del mapa, precios del mapa, «desde» y «al año», pie).
- **Claro** (`claro`): fondo de las secciones claras alternas («Cómo empezar», «Todo lo que incluye», preguntas) y hover de las filas del menú.
- **Blanco** (`blanco`): fondo por defecto de las secciones claras y de las tarjetas de plan, relleno de estaciones y del botón claro.
- **Marino 2** (`marino-2`): solo el hover del botón oscuro.
- **Marino hondo** (`marino-3`): fondo del pie, un escalón más abajo que el cierre.
- **Foco** (`foco`) y **foco sobre oscuro** (`foco-oscuro`): el anillo de foco de teclado; sobre marino cambia a amarillo para no perderse entre las líneas.
- **Verde WhatsApp** (`whatsapp`): solo el botón flotante de WhatsApp en celular. Es el color de la marca ajena y no se usa en ningún otro sitio; los botones de WhatsApp en la página son píldoras del sistema.
- **Tinta y gris de dibujo** (`dibujo-tinta`, `dibujo-gris`): los dos neutros permitidos dentro de las ilustraciones de producto, para trazos de texto simulado y contornos.

### Named Rules
**La regla de la línea propia.** Cada color de línea pertenece a un solo módulo y aparece solo donde está ese módulo: su línea, su estación, su tarjeta, su punto en una lista de conexiones, su página. Ningún color de línea se usa como acento decorativo.

**La regla de los tres registros.** Sobre marino va el color de línea; sobre blanco el texto usa `*-texto`; una superficie del módulo usa `*-tinte`. No se cruzan: el color de línea no se usa para texto sobre claro.

**La regla del transbordo azul.** Facturación es siempre `fac` y siempre está en el centro o en el tronco. Cuando algo conecta módulos, lo conecta pasando por azul: las migas salen de «Inicio» en azul hacia el color de la página, y en un aviso de otro módulo el enlace a facturación va en `fac-texto`, no en el `--ct` de la página.

**La regla del resplandor.** Las portadas de producto conservan el marino y añaden un resplandor radial del color del módulo detrás del dibujo: en escritorio `radial-gradient(55% 75% at 82% 38%, color-mix(in oklab, var(--c) 42%, transparent), transparent 72%)`; en celular, donde el dibujo baja, `radial-gradient(90% 45% at 30% 62%, … 38% …)`. Siempre con un marino plano declarado antes como respaldo. La portada del inicio no lleva resplandor: su mapa ya lleva todos los colores. Las imágenes para compartir (`media/img/compartir-*.jpg`, 1200×630) usan el mismo resplandor y una línea con estaciones del color del módulo.

**La regla de una sola identidad.** Todas las páginas comparten base marino, cabecera, pie, tipografía y forma. El color del producto nunca reemplaza al marino como fondo de una banda ni cambia el botón principal: entra solo como resplandor, línea y tinte.

## Typography

**Display Font:** Barlow (con system-ui, sans-serif), autoalojada en `fonts/`, pesos 400, 500, 600 y 700, `font-display: swap`.
**Body Font:** Barlow, la misma familia.

**Character:** una grotesca de señalética, algo condensada, que recuerda a los rótulos de transporte: sirve igual para el nombre de una estación en el mapa que para un párrafo. Una sola familia; la jerarquía sale del tamaño y el peso.

### Hierarchy
- **Display** (700, clamp(3.6rem, 8.4vw, 6rem), 0.95): el precio de la portada, del inicio y de cada producto («$19», «$199»), dentro del h1 y en línea propia. Es lo más grande de la página, con cifras tabulares; «desde» y «al año» van a 0,42em y 600 en `sobre-oscuro`.
- **Headline portada** (600, clamp(2.4rem, 4.6vw, 3.6rem), 1.05): el h1 del inicio.
- **Headline producto** (600, clamp(2.2rem, 4.2vw, 3.3rem)): el nombre del producto en su portada; la portada legal usa clamp(2.2rem, 4.2vw, 3.2rem).
- **Headline** (600, clamp(2rem, 3.8vw, 2.9rem), 1.1, -0.02em): los h2 de sección y de planes; el cierre sube a clamp(2.1rem, 4.4vw, 3.4rem).
- **Title** (600, clamp(1.45rem, 2.2vw, 1.75rem), 1.1): nombre de cada tarjeta de módulo y h2 de las secciones legales (clamp(1.4rem, 2.2vw, 1.75rem)); la tarjeta de facturación sube a clamp(1.9rem, 3.2vw, 2.5rem). Los pasos usan 1.4rem y el nombre de plan 1.55rem.
- **Precio de plan** (700, clamp(2.6rem, 3.6vw, 3.2rem), 1, cifras tabulares): el precio de cada tarjeta de plan, en `tinta`, con «al año» o «al mes» a 500 en `tinta-suave`.
- **Precio de módulo** (700, 2.1rem, 1, cifras tabulares): el precio dentro de cada tarjeta del inicio, en el `*-texto` de su línea; en facturación sube a clamp(2.6rem, 4.6vw, 3.4rem).
- **Pregunta** (600, 1.15rem, 1.35): el `summary` de cada pregunta frecuente.
- **Bajada** (400, clamp(1.1rem, 1.6vw, 1.3rem), 1.5): el párrafo bajo el h1, a todo el ancho de su columna.
- **Body** (400, 1.0625rem, 1.6): texto corriente; las bajadas de sección y el texto de planes van a 1.15rem. Los cupos y funciones de plan bajan a 0.97rem.
- **Label** (600, 0.95rem, 0.05em, MAYÚSCULAS): el texto de los botones en píldora.
- **Label rótulo** (600, 0.9rem, 0.06em, MAYÚSCULAS): los rótulos que nombran una columna o un estado: los títulos de columna del pie (0.95rem), la cabecera «Hoy / Con SysDevUp» del antes y después, sus etiquetas por fila en celular (0.78rem, 0.07em) y la pestaña «Recomendado» del plan (0.8rem, 0.07em).
- **Rótulo de mapa** (600 19px para la estación, 600 14.5px para su precio, 500 15px para las paradas intermedias): texto dentro del SVG; en celular sube a 24px y 19px y las paradas intermedias se ocultan.

### Named Rules
**La regla del precio más grande.** Los precios van a 700 con cifras tabulares (`font-variant-numeric: tabular-nums`) y son el elemento tipográfico más pesado de su bloque: en la portada, más grandes que el nombre del producto; en un plan, lo más grande de la tarjeta. Es la única excepción al 600 de los titulares, por decisión registrada. Las cifras de los cupos también van tabulares, alineadas a la derecha.

**La regla de un solo peso de titular.** h1, h2 y h3 van a 600, interlineado 1.1 o menos, interletrado negativo y `text-wrap: balance`. No hay titulares a 700 ni a 800.

**La regla del rótulo.** Las mayúsculas espaciadas son solo para rotular algo que ya existe: una acción (botón), una columna (pie, antes y después) o un estado (recomendado). Nunca van sobre un titular como antetítulo.

## Layout

Contenedor de hasta 1200px con márgenes laterales fluidos (`margen`). Las secciones claras tienen un relleno vertical generoso (`seccion`) y alternan blanco y `claro`.

La primera pantalla es una grilla 7/5: texto a la izquierda, mapa o dibujo a la derecha. En el inicio: titular, precio, bajada y acciones junto al mapa SVG. En un producto: migas, nombre con el precio, bajada, WhatsApp y «Ver los planes», junto al dibujo del producto (hasta 420px). Debajo, separada por un filete blanco al 12 %, una fila de cuatro garantías con ícono de trazo; en producto son las cuatro razones concretas de ese producto.

**El inicio.** Los módulos se ordenan como el mapa: la tarjeta de facturación a la izquierda, más grande y pegajosa (sticky a 6.5rem), y las otras cuatro apiladas a la derecha como ramales. Un tronco azul vertical recorre el hueco entre columnas (`hueco`) y cada ramal llega a su tarjeta con un tramo horizontal del color de su línea, a la altura del eje del título. Los pasos de «Cómo empezar» son tres estaciones numeradas sobre una línea azul horizontal; en celular la línea pasa a vertical a la izquierda.

**Una página de producto** sigue siempre este orden: portada con resplandor y garantías; antes y después (blanco); «Todo lo que incluye» (`claro`); planes (blanco), con sus avisos; preguntas frecuentes (`claro`); cierre marino. Cada sección es la misma pieza en las cinco páginas, coloreada por `--c`, `--ct` y `--tinte`.
- El **antes y después** es una tabla de tres columnas (`1fr 88px 1fr`): «hoy» a la izquierda en `tinta-suave`, un tramo de línea al centro y «con SysDevUp» a la derecha en `tinta` a 500, con su condición en letra chica debajo. En celular pasa a dos columnas: una línea vertical de 7px a la izquierda que termina en estación, y cada lado con su etiqueta visible.
- **Todo lo que incluye** es una lista a dos columnas (3.5rem de separación) con estación de 12px y filete inferior; una columna en celular.
- Los **planes** van en una grilla automática de mínimo 235px por tarjeta, con 2.25rem entre filas para que quepa la pestaña. Un producto de un solo plan usa la tarjeta ancha: cabecera a la izquierda (1fr) y funciones a dos columnas a la derecha (1.4fr); una columna en celular.

**Las páginas legales** usan una portada marino compacta (migas y h1, sin precio ni dibujo ni resplandor) y una sola columna de secciones separadas por el filete `borde`.

Puntos de quiebre: 1100px (garantías a dos columnas), 960px (menú móvil, portada a una columna con el dibujo debajo y a 280px, resplandor bajo el dibujo, módulos apilados con el tronco a la izquierda, WhatsApp flotante), 720px (antes y después vertical, incluye y plan ancho a una columna, pasos verticales, garantías a una columna, dibujos de módulo a 64px), 480px (botones de la portada a ancho completo, pie a una columna).

### Named Rules
**La regla del ancho completo.** Los bloques de texto ocupan todo el ancho de su contenedor: párrafos, bajadas, cabeceras de sección, avisos, preguntas y texto legal no llevan `max-width` ni medida en `ch`. Es una decisión del usuario, pedida tres veces; los únicos anchos máximos del sistema son de dibujos, del mapa y de paneles flotantes.

**La regla del precio a la vista.** El inicio muestra precios en tres sitios: cada tarjeta de módulo, cada estación del mapa y cada fila del menú de productos. No se quitan para «limpiar» la página.

## Elevation & Depth

Plano por defecto. La profundidad la dan las bandas de color (marino contra claro), los tintes y el resplandor de la portada de producto, no las sombras. Las sombras existen solo en tres casos: los botones en píldora (una sombra corta y difusa debajo), las capas que flotan (menú de productos, panel móvil, WhatsApp flotante) y la tarjeta de módulo del inicio cuando se le pasa el cursor, que sube 3px y gana una sombra amplia y suave. Las tarjetas de plan, los avisos y las filas no llevan sombra nunca: se separan con el filete `borde`.

Dentro de los dibujos de producto, la tarjeta blanca sí lleva una sombra suave como filtro SVG; su región de filtro tiene que ser lo bastante grande para no recortarla (al menos `x="-30%" y="-30%" width="160%" height="160%"`; el teléfono de facturación usa -40 %/-60 %, 180 %/260 %).

### Shadow Vocabulary
- **Botón claro** (`box-shadow: 0 6px 18px -8px rgba(0,0,0,.45)`): bajo la píldora blanca sobre marino.
- **Botón oscuro** (`box-shadow: 0 8px 20px -10px rgba(7,26,51,.6)`): bajo la píldora marino sobre claro, incluido el botón de cada plan.
- **Tarjeta levantada** (`box-shadow: 0 22px 40px -24px rgba(7,26,51,.35)`): solo en hover de la tarjeta de módulo del inicio, con `translateY(-3px)`.
- **Panel flotante** (`box-shadow: 0 24px 48px -16px rgba(4,16,31,.45), 0 2px 6px rgba(4,16,31,.12)`): el desplegable de productos.
- **Panel móvil** (`box-shadow: 0 24px 40px -20px rgba(0,0,0,.6)`): el menú de celular sobre la página.
- **Flotante** (`box-shadow: 0 10px 24px -8px rgba(0,0,0,.45)`): el botón de WhatsApp en celular.

### Named Rules
**La regla del plano en reposo.** Ninguna superficie lleva sombra en reposo salvo las píldoras y lo que flota sobre la página. Una tarjeta se levanta solo como respuesta al cursor; el plan recomendado se marca con borde, no con sombra.

## Shapes

Todo es redondo. Las acciones son píldoras completas (999px); las tarjetas de módulo, las de plan y el bloque de automatización usan radio grande (28px); el panel del menú 22px, los avisos y la lista de productos del menú móvil 20px, y las filas del menú 16px. Las bandas marino tienen sus esquinas que tocan lo claro redondeadas de clamp(36px, 6vw, 72px): la portada (también la de producto y la legal) abajo, el cierre arriba.

La gramática del mapa tiene medidas propias:
- **Línea**: trazo de 9px, extremos y uniones redondeados, solo tramos rectos y diagonales a 45°. Al señalarla engrosa a 12px.
- **Estación terminal**: círculo blanco con borde de 5px del color de su línea (radio 12 en el SVG, 15 al señalarla).
- **Parada intermedia**: círculo marino con borde de 4px del color de su línea (radio 7).
- **Transbordo**: círculo blanco con borde azul de 8px (radio 26), el más grande del mapa.
- **Paso numerado**: estación de 54px con borde azul de 6px y el número a 700.
- **Puntos de estación en HTML** (diámetro/borde, relleno blanco y borde del color de su línea): 34/8px en la tarjeta de facturación; 26/6px en los ramales y al final de cada tramo del antes y después (24/5px en celular); 16/4px en el menú; 15/4px en las migas; 12/3px en las conexiones y en «Todo lo que incluye»; 11/3px en las listas legales; 10/3px en lo que incluye cada tarjeta; 9/2.5px en las funciones de plan.
- **Tramo de migas**: 44×6px, de `fac` a `--c`, entre la estación «Inicio» y la de la página.
- **Tramo del antes y después**: 9px con el extremo izquierdo redondo; gris `riel-hoy` hasta el 45 % y del color del módulo desde ahí, hasta la estación.

### Named Rules
**La regla de la estación.** Todo marcador del sistema (viñeta, punto de menú, paso, nodo, miga, marca de un dibujo) es una estación: círculo de relleno blanco con borde del color de su línea. No hay viñetas sólidas, chulos, insignias de verificación ni cuadrados.

## Components

### Buttons
Píldoras firmes, en mayúsculas espaciadas; la acción principal casi siempre es WhatsApp.
- **Shape:** píldora completa (999px), alto mínimo 3.25rem.
- **Claro:** fondo blanco, texto marino; es el botón sobre bandas marino (WhatsApp de la portada y del cierre, cabecera). Lleva el ícono de WhatsApp en SVG a 1.25rem.
- **Oscuro:** fondo marino, texto blanco; es el botón sobre secciones claras, incluido «Lo quiero» de cada plan, a todo el ancho de la tarjeta y empujado al pie.
- **Chico:** 2.6rem de alto y 0.85rem de texto, para la cabecera.
- **Hover / Focus:** sube 1px y cambia de fondo (claro a `fac-tinte`, oscuro a `marino-2`); al presionar vuelve a su sitio. Foco: anillo de 3px a 3px de separación.
- **Enlace con flecha:** la acción secundaria («Ver los planes», «Ver planes de facturación») es texto a 600 con una flecha SVG que se corre 3px al pasar el cursor, nunca un segundo botón.
- **WhatsApp flotante:** círculo verde `whatsapp` de 58px abajo a la derecha, solo en ≤960px, con el logo blanco a 30px. Con JS se oculta mientras la portada está en pantalla y aparece (300ms) cuando sale; sin JS queda visible.

### Chips
- **Style:** las conexiones de cada tarjeta («Se conecta con…») son píldoras blancas al 75 % sobre el tinte, texto 0.88rem a 500, con el punto de estación de 12px del módulo conectado al inicio.
- **State:** son informativas, sin estado.

### Cards / Containers
- **Tarjeta de módulo (inicio):** radio 28px, fondo del tinte de su línea, plana en reposo y levantada en hover, sin borde; la conexión la da el tramo de línea desde el tronco y el punto de estación sobre su borde izquierdo. Relleno clamp(1.5rem, 3vw, 2.1rem); facturación clamp(1.75rem, 3.5vw, 2.75rem). Toda la tarjeta es clicable mediante el enlace del título.
- **Contenedor de contorno:** el bloque de automatización va sin tinte, con filete `borde` y el mismo radio de 28px, porque no es un módulo y no tiene línea.

### Planes
Tarjetas blancas de contorno, para comparar sin adornos.
- **Tarjeta:** fondo blanco, filete `borde` de 1px, radio 28px, relleno 2.1rem 1.6rem 1.6rem; columna con nombre, lema en `tinta-suave` (alto mínimo de dos líneas para alinear), precio, cupos, funciones y el botón oscuro al pie.
- **Cupos:** filas etiqueta a la izquierda y cifra a 600 tabular a la derecha, entre dos filetes `borde`.
- **Funciones:** lista con estación de 9px del color del módulo.
- **Recomendado:** borde de 2px en `--ct` y una pestaña en píldora centrada sobre el borde superior, fondo `--ct`, texto blanco en rótulo de mayúsculas. Sin sombra.
- **Plan ancho:** cuando el producto tiene un solo plan, la tarjeta ocupa todo el ancho, con la cabecera (nombre, precio, cupos, botón) a la izquierda y las funciones a dos columnas a la derecha.
- **Intro:** h2, texto a 1.15rem y los avisos, todo en una pila de 1rem, a ancho completo.

### Avisos
- **Style:** caja del tinte del módulo, radio 20px, relleno 1.15rem 1.35rem, ícono de trazo de 22px en `--ct` a la izquierda, texto en `tinta` con la frase inicial en negrita.
- **Enlaces:** a 600 en `--ct`; si el enlace lleva a facturación, va en `fac-texto` aunque la página sea de otro módulo.
- Van junto a los planes (antes y después de la grilla), nunca flotando sueltos en otra sección.

### Preguntas frecuentes
- `details` nativos separados por el filete `borde` arriba y debajo del último; la pregunta a 600 y 1.15rem, con un ícono «+» de 22px en `--ct` a la derecha que gira 45° (queda como «×») al abrirse.
- La respuesta en `tinta-suave`, con 2.5rem de aire a la derecha, a todo el ancho.

### Navigation
- **Cabecera:** pegajosa, fondo marino, 4.75rem de alto, logo blanco a 54px a la izquierda (46px en ≤480px). Idéntica en todas las páginas.
- **Enlaces:** blancos a 500, en píldora transparente que se aclara (blanco al 10 %) en hover o abierta. «Acceder al sistema» va en `sobre-oscuro` porque es para quien ya es cliente. Cierra con el botón claro chico de WhatsApp.
- **Productos:** un `details` nativo que abre un panel blanco de 22px de radio con una fila por módulo: punto de estación, nombre a 600, descripción en `tinta-suave` y precio tabular a la derecha. Se cierra con Escape, clic fuera o al salir el foco.
- **Móvil (≤960px):** hamburguesa de 48px y radio 14px en un `details`; el panel baja sobre marino, con la misma lista de productos (y sus precios) en una tarjeta blanca de 20px, los demás enlaces en blanco y el botón de WhatsApp.
- **Migas:** dibujadas como una ruta corta sobre la portada: «Inicio» como estación azul, un tramo de 44px que pasa de `fac` al color de la página, y la página actual como estación de su color. Texto a 0.95rem; «Inicio» blanco a 500, la página en `sobre-oscuro`.

### Portada de producto
Banda marino con resplandor del módulo (ver la regla del resplandor) y costura redondeada abajo. Izquierda: migas, h1 con el nombre del producto y debajo el precio a tamaño display con «desde» y «al año» pequeños, bajada, botón claro de WhatsApp con «Ver los planes» al lado, y la nota humana en `sobre-oscuro`. Derecha: el dibujo del producto. Debajo, las cuatro razones con ícono de trazo blanco.

### Antes y después (componente de producto)
Lista ordenada de filas entre filetes `borde`. Cada fila: lo que el cliente hace hoy, un tramo que nace gris y llega del color del módulo a una estación, y el mismo trabajo con SysDevUp, con su condición en letra chica teñida (`color-mix` al 38 %). La cabecera de columnas «Hoy / Con SysDevUp» es un rótulo en mayúsculas (la segunda en `--ct`) y es decorativa para lectores; en celular la cabecera desaparece y cada lado lleva su propia etiqueta visible, mientras el tramo se vuelve vertical.

### Portada legal y texto legal
Banda marino compacta con migas y h1, sin resplandor. El texto va en una columna de secciones con h2 a tamaño título y filete `borde` entre ellas; las viñetas de lista son estaciones de 11px en `--ct`, no puntos sólidos.

### Cierre
Banda marino centrada con costura redondeada arriba: h2 grande, una frase en `sobre-oscuro` y el botón claro de WhatsApp. Cierra todas las páginas de producto y el inicio.

### Dibujos de producto
Las cinco ilustraciones (`media/img/hero-*.svg`) son propias y siguen la gramática del mapa:
- Usan solo los tres registros de su módulo (línea, texto, tinte) más blanco, `dibujo-tinta`, `dibujo-gris`, el filete `borde` y un degradado de papel muy claro. Ningún color de otro módulo.
- Todo marcador es una estación (relleno blanco, borde de color); no hay chulos, insignias de verificación ni puntos sólidos.
- El de facturación es un teléfono con la factura y una ruta corta emitida → autorizada → enviada hacia las tarjetas del correo y del cliente.
- La sombra de la tarjeta va en un filtro con región amplia (ver Elevation).

### El mapa de líneas (componente firma)
SVG en la portada del inicio: facturación al centro como transbordo y cuatro líneas que salen de ella hacia su estación terminal, cada una con una parada intermedia que nombra lo que comparte con facturación. Cada estación es un enlace a su página, con rótulo, precio y `aria-label` completo; debajo, una leyenda con filete izquierdo que explica la estación señalada.
- **Reposo:** las líneas a opacidad completa.
- **Al señalar una estación** (cursor o foco): las demás líneas bajan a 16 % de opacidad, la suya sube a 12px y la leyenda cambia. Señalar el transbordo enciende todas.
- **Táctil:** el primer toque enciende la línea y explica; el segundo abre la página.
- **Recorrido de entrada:** con JS y sin movimiento reducido, al entrar el mapa en vista (30 %) las líneas parten apagadas y se encienden una a una cada 900ms (inventario, contabilidad, consultorios, servicio técnico), y al terminar quedan todas encendidas. Cualquier interacción lo detiene.
- **Sin JS o con movimiento reducido:** el mapa está entero encendido y quieto; nada depende del recorrido para verse.

## Do's and Don'ts

### Do:
- **Do** dibujar cualquier relación entre módulos como una línea de 9px que llega a una estación de relleno blanco y borde de color.
- **Do** poner facturación en azul (`fac`) y en el centro o el tronco de cualquier composición de módulos.
- **Do** usar el color de cada módulo en sus tres registros: línea sobre marino, `*-texto` sobre claro, `*-tinte` de fondo; en una página de producto, leerlos de `--c`, `--ct` y `--tinte`.
- **Do** abrir y cerrar cada página con bandas marino de costura redondeada (clamp(36px, 6vw, 72px)) y dejar el medio en blanco y `claro`.
- **Do** dar a cada portada de producto el resplandor radial de su módulo detrás del dibujo, con un marino plano de respaldo; la del inicio va sin resplandor.
- **Do** poner los precios a 700 con cifras tabulares y hacerlos lo más grande de su bloque, y dejarlos a la vista en el inicio (tarjetas, mapa y menú).
- **Do** dejar que párrafos, bajadas, cabeceras de sección, avisos, preguntas y texto legal ocupen todo el ancho del contenedor.
- **Do** separar filas y tarjetas de plan con el filete `borde` de 1px; marcar el plan recomendado solo con borde de 2px en `--ct` y su pestaña.
- **Do** usar píldoras para toda acción: botón claro sobre marino, botón oscuro sobre claro.
- **Do** dejar el contenido visible sin JS y con `prefers-reduced-motion`: la animación solo puede llevar algo de encendido a encendido, nunca de oculto a visible.
- **Do** usar los dibujos propios de cada módulo (`media/img/hero-*.svg`) y los íconos de trazo en SVG, con regiones de filtro que no recorten la sombra.

### Don't:
- **Don't** hacer tarjetas de módulo iguales: cada una lleva el tinte de su línea y su punto de estación, y facturación es más grande.
- **Don't** usar un color de línea fuera de su módulo, ni como texto sobre blanco, ni dentro del dibujo de otro módulo.
- **Don't** darle a una página de producto otra base que el marino ni otro botón principal: el color del producto es resplandor, línea y tinte, nada más.
- **Don't** poner `max-width` ni medida en `ch` a párrafos, intros de sección, avisos, preguntas o texto legal.
- **Don't** quitar los precios del inicio.
- **Don't** usar capturas del sistema ni fotos; las imágenes son ilustraciones propias.
- **Don't** poner sombras en reposo sobre tarjetas, planes, avisos o secciones; la profundidad la dan las bandas, los tintes y el resplandor.
- **Don't** subir los titulares a 700 u 800; el 700 es solo para precios.
- **Don't** usar viñetas sólidas, chulos, insignias de verificación o cuadrados como marcadores, ni en HTML ni en los dibujos; todo marcador es una estación.
- **Don't** usar las mayúsculas espaciadas como antetítulo encima de un titular; son solo para botones, columnas y la pestaña de estado.
- **Don't** usar el verde `whatsapp` fuera del botón flotante.
- **Don't** traer al sistema los colores, fuentes ni componentes de `css/style.min.css`: ya ninguna página lo usa y no es este mundo.
