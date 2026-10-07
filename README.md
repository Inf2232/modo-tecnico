# Modo Técnico

Sitio web profesional de **Modo Técnico**, servicio de soporte informático (diagnóstico, mantenimiento, instalación y soporte de PC y notebooks) en Montevideo, Uruguay.

🔗 **Sitio en producción:** https://modo-tecnico.carlospescoso03.workers.dev/

## Objetivo

1. **Captar clientes reales**: la conversión principal es WhatsApp.
2. **Demostrar criterio técnico**: arquitectura mantenible, rendimiento, accesibilidad y SEO local.

## Resultados

Auditoría de Lighthouse (PageSpeed Insights) sobre la página de inicio, octubre de 2026:

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     100     |      100      |      100       | 100 |

## Stack

- [Astro](https://astro.build): páginas estáticas, con JavaScript solo donde hace falta
- [React](https://react.dev) con TypeScript: únicamente el formulario de diagnóstico
- [Tailwind CSS](https://tailwindcss.com) v4, con colores de marca definidos como tokens de diseño
- Content Collections de Astro para el blog (Markdown validado con Zod)
- Despliegue en Cloudflare, conectado a este repositorio de GitHub

## Funcionalidades

- **Catálogo de servicios** generado desde un único archivo de datos: una plantilla produce las 16 páginas de servicio.
- **Contacto por WhatsApp**: botones con mensajes predefinidos y un formulario que arma un mensaje estructurado, sin backend.
- **Blog** con borradores ocultos por defecto en producción.
- **Sección de trabajos** que se activa sola cuando hay casos reales cargados.
- **FAQ**, página "Sobre mí" y política de privacidad.
- **SEO**: título y descripción únicos por página, canonical, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` y datos estructurados Schema.org (LocalBusiness, Service, BreadcrumbList, FAQPage, BlogPosting).
- **Accesibilidad**: HTML semántico, navegación por teclado, estados de foco, etiquetas en formularios, `aria-*` y contraste verificado.

## Decisiones de diseño

- **Una sola fuente de verdad.** Datos del negocio, contacto, servicios y preguntas frecuentes viven en `src/config` y `src/data`. Cambiar un precio o un teléfono es editar una línea.
- **Contenido veraz por construcción.** Los datos sin definir usan el marcador `[POR DEFINIR]` y los componentes **no los muestran**: los botones, secciones y datos estructurados aparecen solo cuando el dato existe.
- **Sin dirección pública.** El negocio atiende a domicilio, así que los datos estructurados usan `areaServed` en lugar de una dirección.
- **JavaScript mínimo.** El menú móvil es JS plano de pocas líneas, y el formulario se hidrata solo cuando es visible (`client:visible`).
- **Seguro por defecto.** Los artículos nuevos nacen como borrador; en el JSON-LD se escapa `<` para evitar inyección en el HTML.

## Estructura

```
src/
├── components/   # componentes .astro y el formulario .tsx
├── config/       # site.ts y contact.ts: datos del negocio
├── content/      # artículos del blog (Markdown)
├── data/         # services.ts, faq.ts, projects.ts
├── layouts/      # Layout.astro
├── lib/          # whatsapp.ts (enlaces) y schema.ts (JSON-LD)
├── pages/        # rutas del sitio
└── styles/       # global.css y tokens de diseño
```

## Desarrollo local

Requisitos: Node.js 22.12 o superior.

```
npm install
npm run dev
```

El sitio queda disponible en http://localhost:4321

| Comando           | Acción                                |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo                |
| `npm run build`   | Genera el sitio estático en `dist/`   |
| `npm run preview` | Previsualiza el build local           |

## Configuración

- Datos del negocio: `src/config/site.ts` y `src/config/contact.ts`.
- URL pública del sitio: opción `site` en `astro.config.mjs` (de ahí salen el canonical, el sitemap y `robots.txt`).
- Servicios y precios: `src/data/services.ts`.
- Variables de entorno: por ahora no se necesita ninguna; `.env.example` documenta cómo se añadirían (por ejemplo, analítica) sin exponer secretos.

## Despliegue

El repositorio está conectado a Cloudflare: cada `git push` a `main` ejecuta `npm run build` y publica la carpeta `dist/`.

## Mejoras futuras

- Dominio propio.
- Analítica ligera (Cloudflare Analytics) sin cookies.
- Más artículos y casos de trabajo reales.
- Chatbot comercial como componente independiente.
- Evolución hacia un sistema de turnos y seguimiento de equipos: API con FastAPI y PostgreSQL.

## Autor

**Carlos Alejandro Pescoso Reyes**, Ingeniero Informático. Montevideo, Uruguay.