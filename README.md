# Sitio web de SysDevUp

Sitio estático servido por **Cloudflare Pages**. Cada push a `main` despliega.

## Estilos

El CSS se edita en `css/style.css` y se compila a `css/style.min.css`, que es el
archivo que cargan las páginas. **No edites `style.min.css` a mano**: el siguiente
build lo sobrescribe.

```sh
npm install        # una sola vez
npm run build:css  # después de cada cambio en css/style.css
```

Al cambiar el CSS, sube el número de versión del enlace en las páginas
(`css/style.min.css?1.1.4`) para que los navegadores y Cloudflare no sirvan la
copia cacheada.

## URLs

Cloudflare redirige cualquier URL terminada en `.html` a su versión sin
extensión (`/facturacion-electronica.html` → `/facturacion-electronica`), así que
los enlaces internos se escriben sin `.html` para evitar el salto de redirección.
Los `<link rel="canonical">` y el `sitemap.xml` usan esa misma forma.
