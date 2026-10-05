# Modo Técnico

Sitio web profesional de **Modo Técnico**, servicio de soporte técnico,
mantenimiento y asistencia informática en Montevideo, Uruguay.

> Proyecto en desarrollo.

## Objetivo

- Captar clientes reales para servicios informáticos, con contacto por WhatsApp.
- Servir como proyecto demostrable de portafolio.

## Stack

- [Astro](https://astro.build) (páginas estáticas)
- React (solo componentes interactivos)
- TypeScript
- Tailwind CSS
- Despliegue previsto en Cloudflare Pages

## Desarrollo local

Requisitos: Node.js 20 o superior.

    npm install
    npm run dev

El sitio queda disponible en http://localhost:4321

## Comandos

| Comando           | Acción                          |
| ----------------- | ------------------------------- |
| `npm run dev`     | Servidor de desarrollo          |
| `npm run build`   | Genera el sitio en `dist/`      |
| `npm run preview` | Previsualiza el build           |

## Estructura

    src/
    ├── assets/       # imágenes
    ├── components/   # componentes .astro y .tsx
    ├── config/       # site.ts, contact.ts (datos centralizados)
    ├── content/      # artículos del blog
    ├── data/         # servicios, FAQ, proyectos
    ├── layouts/      # plantillas de página
    ├── pages/        # rutas
    └── styles/       # estilos globales