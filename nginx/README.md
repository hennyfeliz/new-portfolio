# NGINX para hennyfeliz.site (Windows)

Este directorio es solo para versionar la configuracion. Debes copiar estos archivos a la instalacion real de NGINX en tu PC.

## Estructura recomendada en NGINX

Coloca estos archivos dentro de `C:\nginx\conf\` (o la ruta donde tengas NGINX):

- `nginx.conf`
- `conf.d/http_common.conf`
- `conf.d/proxy_common.conf`
- `sites-enabled/hennyfeliz.site.conf`

## Pasos de arranque (resumen)

1) Ejecuta la app Next.js:
   - `npm install`
   - `npm run build`
   - `npm run start` (por defecto escucha en `http://localhost:3000`)
2) Arranca NGINX y valida configuracion:
   - `nginx -t`
   - `nginx -s reload`

## HTTPS

El bloque HTTPS en `sites-enabled/hennyfeliz.site.conf` esta comentado para evitar errores sin certificados. Cuando generes certificados (por ejemplo con win-acme), actualiza las rutas y descomenta el bloque.
