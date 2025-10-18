# Centro Visitantes Angostura — Pantalla interactiva (React + Vite + Tailwind)

## Qué contiene este ZIP
Proyecto React creado con Vite. Incluye la funcionalidad solicitada:
- Barra superior con título, buscador y botón discreto para modo administrador.
- Modal de login administrativo con botón para mostrar/ocultar la contraseña.
- Rejilla de animales en filas de 3 (responsive).
- Modal para ver animal y modal admin para agregar/editar/borrar animales.
- Persistencia con localStorage (ideal para kiosk offline).

## Contraseña admin
La contraseña se mantiene como: **admin1234**

## Pasos rápidos para ejecutar
1. Extrae el ZIP y abre la carpeta `centro-angostura` en Visual Studio o VS Code.
2. Ejecuta en la terminal:

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

3. Abre la URL que te da Vite (por ejemplo http://localhost:5173).

## Notas
- Las imágenes subidas por el admin se guardan en localStorage como base64.
- Para mayor seguridad, mover autenticación a servidor (no incluido aquí).
- Si quieres que te lo convierta en app de escritorio con Electron, puedo ayudarte después.
