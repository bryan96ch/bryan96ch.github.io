# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cada página tiene su propio público, con una misma identidad visual (decidido por el usuario el 2026-11-21).

- **La portada presenta a SysDevUp**: a cualquier negocio ecuatoriano que llega sin saber todavía qué necesita.
- **Cada página de producto le habla a su cliente**:
  - **Facturación electrónica**: negocios que tienen que emitir comprobantes del SRI (comercios, profesionales, negocios RIMPE), muchas veces sin personal técnico y decidiendo solos.
  - **Control de inventarios**: negocios con mercadería y bodegas.
  - **Sistema contable**: empresas y personas obligadas a llevar contabilidad, y su contador.
  - **Consultorios médicos**: profesionales de la salud y centros médicos.
  - **Servicio técnico**: empresas de servicio técnico y talleres con técnicos en la calle.
- Llegan por buscadores, redes o recomendación, y deciden conversando por WhatsApp.

## Product Purpose

SysDevUp es un sistema web de gestión para negocios en Ecuador (sistema.sysdevup.com). Tiene:
- facturación electrónica del SRI: facturas, notas de crédito, notas de débito, retenciones y guías de remisión;
- control de inventarios;
- contabilidad;
- módulos por oficio: consultorios médicos y servicio técnico;
- además, automatización de procesos como servicio.

El sitio sirve para que el visitante entienda qué le sirve a él, vea el precio y escriba por WhatsApp.

## Positioning

- **Todo en un sistema, por módulos.** El cliente puede empezar con un módulo e ir sumando otros que ya están conectados, o empezar con todos: él decide. Los módulos comparten los datos:
  - la factura sale de la orden o de la consulta;
  - la factura autorizada descuenta el inventario;
  - los asientos contables salen de las facturas y de las compras.
- **Acompañamiento humano.** Detrás del sistema hay personas que atienden por WhatsApp, ayudan a empezar y a usarlo. Lema actual: «Te acompañamos en cada paso, no solo te entregamos el sistema».

## Operating Context

- Para emitir comprobantes hace falta una **firma electrónica** vigente, que emite una entidad certificadora. No está incluida en ningún plan; SysDevUp orienta a quien no la tiene.
- El sistema funciona en el navegador, en computadora, tablet o celular, sin instalar nada.
- **El único canal de venta es WhatsApp**: +593 99 982 3447, con el mensaje ya escrito según el plan. «Acceder al sistema» lleva a sistema.sysdevup.com y es para quien ya es cliente.
- **Cómo se cobra cada producto:**
  - al año: facturación (desde $19), inventarios (desde $0) y contabilidad ($199);
  - al mes: consultorios (desde $39,99) y servicio técnico (desde $35).
- **Los precios publicados son finales**: SysDevUp factura con IVA 0 %, así que nunca se les agrega «+ IVA».
- **Las cifras del sitio deben coincidir con los planes del sistema en producción.** Se leen de ahí antes de publicar un cambio. Viven también en el JSON-LD de cada página.

## Capabilities and Constraints

- **Lo que ya no se ofrece:**
  - páginas web, desde el 2026-11-03;
  - sistemas a medida, desde el 2026-11-21.

  La atención por WhatsApp con IA existe, pero no va en el sitio, por decisión del usuario.
- **Técnica:**
  - HTML y CSS estáticos, sin compilación, una página por producto y URL sin `.html`;
  - el JS solo maneja el menú y las animaciones de entrada;
  - se publica con `git push` y lo sirve un Worker de Cloudflare que sube todo el repositorio (lo que no debe publicarse va en `.assetsignore`);
  - el CSS va sin comentarios.
- **Texto:**
  - español de Ecuador, de tú, nunca con voseo;
  - vender sin que parezca venta: «ya lo tenemos», sin urgencias ni el plazo del SRI como amenaza.
- **Lo que el sitio no puede afirmar:**
  - una certificación o autorización del SRI;
  - cifras de clientes, de comprobantes o de calificaciones;
  - testimonios;
  - descuentos tachados que no existan.
- **Datos que no se publican:**
  - el RUC de SysDevUp;
  - el nombre de quien está detrás: la experiencia se dice sin nombres.

## Brand Commitments

- Nombre: SysDevUp, dominio sysdevup.com.
- Logo: el isotipo de tres rombos, en `media/img/logo.png` y `media/img/logo_blanco.png`.
- Voz: cálida, concreta y honesta sobre los límites de cada plan.
- La portada y las páginas de producto comparten una misma identidad visual.
- Referencias que el usuario hizo vinculantes el 2026-11-21:
  - la dirección visual de es.siteground.com, como orientación y no como copia;
  - ilustraciones propias, ni capturas del sistema ni fotos.

## Evidence on Hand

- **Experiencia:** más de 10 años del equipo haciendo software para empresas (confirmado por el usuario el 2026-11-21; se dice sin nombres).
- **El producto existe y está en producción**, con las funciones, los planes, los cupos y las preguntas frecuentes que describe cada página.
- **Imágenes propias:**
  - los dibujos de cada producto, en `media/img/hero-*.svg`;
  - los íconos de servicio, en `media/img/servicio-*.svg`;
  - las imágenes para compartir, en `media/img/compartir-*.jpg`.
- **No hay todavía, y no se inventa:** testimonios, logos de clientes, calificaciones, cantidad de clientes ni de comprobantes emitidos. Cuando haya clientes que acepten aparecer con nombre y negocio, se agregan.

## Product Principles

1. **Empieza con un módulo y crece conectado.** Cada producto se muestra con lo que comparte con los demás.
2. **Hay personas detrás del sistema.** El acompañamiento por WhatsApp es parte del producto, no una nota al pie.
3. **Claro antes que llamativo.** Precio, cupos y límites a la vista, y ninguna afirmación que no se pueda respaldar.
4. **Hablar el idioma de cada oficio.** Cada página nombra el trabajo diario de su cliente, no funciones genéricas.
