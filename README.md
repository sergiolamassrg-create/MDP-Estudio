# MDP-Estudio

Sitio web estatico para estudiar **Metodologia de Pruebas** desde celular o escritorio.

## Objetivo

Crear una mini app de estudio responsive con indice, buscador, modo claro/oscuro, progreso de lectura y navegacion comoda entre temas.

## Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla
- Bootstrap 5 por CDN
- Sin backend
- Sin base de datos
- Compatible con Netlify y GitHub Pages

## Estructura

```text
MDP-Estudio/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Deploy en Netlify

No requiere instalacion ni build.

- Build command: dejar vacio
- Publish directory: raiz del proyecto

## Deploy en GitHub Pages

1. Subir este proyecto a un repositorio de GitHub.
2. Ir a `Settings > Pages`.
3. Elegir la rama principal.
4. Usar la raiz del proyecto como carpeta de publicacion.

## Como agregar temas

Copiar una seccion con `class="study-card"` en `index.html`, cambiar el `id`, el numero de tema y el contenido. Luego agregar el enlace correspondiente en los dos indices.
