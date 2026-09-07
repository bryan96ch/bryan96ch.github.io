Cláusulas retiradas del sitio — servicio «Atención Inteligente»
==============================================================

Retiradas el 2026-09-07, cuando se decidió no ofrecer el servicio por ahora.
Están aquí tal como estaban publicadas, para volver a ponerlas si el servicio se relanza.
El nombre empieza con guion bajo a propósito: GitHub Pages (Jekyll) no publica esos archivos.

La página completa `asistente-whatsapp-con-ia.html` no está aquí — se borró del árbol y se
recupera entera con `git show <commit anterior>:asistente-whatsapp-con-ia.html`.


--------------------------------------------------------------
## politica-de-privacidad.html
--------------------------------------------------------------

```html
            <p><strong>De los clientes finales que escriben por WhatsApp a un negocio que usa nuestro servicio de Atención Inteligente</strong>, y que no son usuarios de esta plataforma:</p>
            <ul>
                <li>Su número de teléfono y el nombre que WhatsApp muestre.</li>
                <li>El contenido de los mensajes que intercambian con ese negocio, incluidas las respuestas que el asistente o una persona del negocio les envían.</li>
                <li>La fecha y el estado de entrega de cada mensaje.</li>
            </ul>
            <p>Esos datos se tratan <strong>por cuenta del negocio con el que la persona decidió comunicarse</strong>, que es quien decide para qué los usa. Nosotros los procesamos para poder prestarle el servicio y no los usamos para ninguna finalidad propia.</p>
```

```html
                <li>En el servicio de Atención Inteligente, <strong>interpretar el mensaje recibido y redactar una respuesta</strong> con la información que el negocio cargó en la plataforma. Para eso el texto del mensaje se envía a un proveedor de inteligencia artificial, como se detalla más abajo.</li>
```

```html
            <p>Si eres cliente final de un negocio que usa nuestro asistente y quieres ejercer tus derechos sobre esa conversación, puedes pedírnoslo por el mismo canal y lo trasladamos al negocio con el que hablaste, que es el responsable de decidirlo. También puedes dirigirte directamente a él.</p>
```

```html
                <li><strong>Anthropic</strong> — cuando un cliente final escribe al asistente, el texto de su mensaje y los datos que el negocio cargó (horarios, dirección, productos y precios) se envían a su servicio de inteligencia artificial para interpretar la consulta y redactar la respuesta.</li>
```

```html
                <li><strong>Meta Platforms</strong> — es quien opera WhatsApp y por quien pasan todos los mensajes que se reciben y se envían.</li>
```


--------------------------------------------------------------
## terminos-y-condiciones.html
--------------------------------------------------------------

```html
            <p>Cuando usas el servicio de Atención Inteligente, los datos de las personas que le escriben a tu número de WhatsApp <strong>son tuyos y tú decides para qué se usan</strong>. SysDevUp los trata únicamente por cuenta tuya y siguiendo tus instrucciones, para poder prestarte el servicio. Eres tú quien debe informar a esas personas cómo tratas sus datos y atender los derechos que ejerzan sobre ellos.</p>
```

```html
        <section>
            <h2>El asistente de inteligencia artificial</h2>
            <p>El asistente redacta sus respuestas a partir de la información que <strong>tú cargas</strong> en la plataforma: horarios, dirección, formas de pago, envíos, productos y precios. La exactitud de esa información es tu responsabilidad, y mantenerla al día también.</p>
            <p>Como todo sistema basado en modelos de lenguaje, <strong>el asistente puede equivocarse</strong>: malinterpretar una consulta, responder de forma incompleta o no responder. Aunque el sistema está diseñado para no inventar precios ni salirse del tema de tu negocio, no garantizamos que toda respuesta sea correcta, oportuna o adecuada para cada caso.</p>
            <p>Las respuestas que el asistente envía <strong>salen de tu número y a tus clientes las lee como tuyas</strong>. Eres responsable de lo que tu WhatsApp comunica, incluidas las respuestas automáticas, y te recomendamos revisar la bandeja de conversaciones con regularidad y usar la derivación a una persona cuando el asunto lo amerite.</p>
            <p>El asistente no sustituye la atención humana en asuntos que requieran criterio profesional, ni debe usarse para dar indicaciones médicas, legales, financieras o de seguridad.</p>
        </section>
```

```html
            <p>En particular, el uso de WhatsApp está sujeto a las políticas de Meta, incluida la ventana de 24 horas para responder con texto libre y el requisito de usar plantillas aprobadas fuera de ella. Meta puede restringir o dar de baja un número que incumpla sus políticas.</p>
```

```html
            <p>Cada plan incluye un cupo de mensajes que salen por mes. Recibir mensajes nunca se corta, pero <strong>agotado el cupo el sistema deja de enviar</strong> hasta que se renueve el período o cambies de plan.</p>
```

```html
            <p>El precio del plan corresponde al uso de la plataforma. <strong>Las conversaciones de WhatsApp las factura Meta directamente a tu negocio</strong>, con el medio de pago que registres en tu propia cuenta: es un costo aparte, ajeno a lo que pagas a SysDevUp, y sus tarifas las fija Meta.</p>
```


--------------------------------------------------------------
## index.html
--------------------------------------------------------------

```html
                <div class="servicio">
                    <h3>Atención Inteligente</h3>
                    <img src="media/img/servicio-asistente.svg" alt="Asistente de WhatsApp con inteligencia artificial" width="84" height="84" data-aos="fade-in">
                    <div class="servicio-content" data-aos="zoom-in">
                        • Respuestas por WhatsApp a toda hora <br>
                        • Horarios, ubicación, pagos y envíos <br>
                        • Precios tomados de tu catálogo <br>
                        • Pase a una persona de tu equipo <br>
                        • Bandeja con todas las conversaciones <br>
                        • Lo configuras tú, sin programar
                    </div>
                    <a href="asistente-whatsapp-con-ia" aria-label="Ver más sobre el asistente de WhatsApp">
                        Ver más
                    </a>
                </div>
```


--------------------------------------------------------------
## sitemap.xml
--------------------------------------------------------------

```html
    <!-- Asistente de WhatsApp con IA -->
    <url>
        <loc>https://sysdevup.com/asistente-whatsapp-con-ia</loc>
        <lastmod>2026-09-04</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
```


--------------------------------------------------------------
## Frases que se editaron, no se borraron
--------------------------------------------------------------

Para relanzar el servicio hay que revertir también estas tres, además de reponer los bloques de arriba.

`politica-de-privacidad.html`, Plazo de conservación — decía:

```html
            <p>Los datos de tu cuenta y las conversaciones se conservan mientras el servicio esté activo, y se eliminan cuando lo solicitas o cuando cierras tu cuenta.</p>
```

`terminos-y-condiciones.html`, Servicios de terceros — decía:

```html
            <p>Parte del servicio funciona sobre proveedores externos —entre otros Meta (WhatsApp), el SRI, el proveedor de inteligencia artificial, el de alojamiento y el de correo— cuyas condiciones, disponibilidad y precios <strong>no controlamos</strong>.</p>
```

`terminos-y-condiciones.html` — el título de esa sección era `<h2>Planes, cupos y cobros de terceros</h2>`,
y ahora es `<h2>Planes y pagos</h2>`.

`index.html` — el subtítulo de servicios decía «Cuatro formas de trabajar juntos»; ahora dice «Tres formas».
El `meta description`, el `meta keywords`, el `knowsAbout` y el `hasOfferCatalog` del JSON-LD también
nombraban el servicio.
