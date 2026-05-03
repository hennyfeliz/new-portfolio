# DNS, router y TLS (Windows)

## DNS (Network Solutions)

1) Crea un registro **A** para `hennyfeliz.site` apuntando a tu IP publica.
2) Para `portfolio.hennyfeliz.site` puedes usar:
   - Otro **A** a la misma IP, o
   - Un **CNAME** hacia `hennyfeliz.site`.

Si tu IP es dinamica, considera un servicio de DNS dinamico (DDNS).

## Router (port forwarding)

Abre y redirige estos puertos hacia la IP local de tu PC:
- `80/tcp` -> PC local (NGINX)
- `443/tcp` -> PC local (NGINX)

## Windows Defender Firewall

Permite entradas para NGINX en puertos 80 y 443.

## TLS (HTTPS) en Windows

Opcion recomendada: **win-acme** (Let's Encrypt).

Pasos generales:
1) Instala win-acme.
2) Genera certificados para `hennyfeliz.site` y `portfolio.hennyfeliz.site`.
3) Copia los certificados a `C:\nginx\conf\ssl\hennyfeliz.site\`.
4) Actualiza rutas en `sites-enabled/hennyfeliz.site.conf` y descomenta el bloque HTTPS.
