# Guía de Despliegue en Vercel

Este proyecto está preparado para ser desplegado en **Vercel** como una aplicación Frontend (Single Page Application).

## Pasos para desplegar

1.  **Subir el código a GitHub/GitLab/Bitbucket**
    *   Asegúrate de que todo tu código esté en un repositorio remoto.

2.  **Crear un nuevo proyecto en Vercel**
    *   Entra en [vercel.com](https://vercel.com) e inicia sesión.
    *   Haz clic en **"Add New..."** -> **"Project"**.
    *   Importa tu repositorio de Git.

3.  **Configuración del Proyecto**
    *   Vercel detectará automáticamente que es un proyecto **Vite**.
    *   **Framework Preset**: `Vite`
    *   **Root Directory**: `.` (La raíz del proyecto)
    *   **Build Command**: `npx vite build` (Ya configurado en `vercel.json`)
    *   **Output Directory**: `dist/public` (Ya configurado en `vercel.json`)

4.  **Desplegar**
    *   Haz clic en **Deploy**.
    *   Vercel construirá solo la parte Frontend de la aplicación.

## Nota Importante sobre el Backend
Este despliegue es **SOLO FRONTEND**.
Como estamos en modo prototipo ("Mockup Mode"), toda la lógica de servidor, bases de datos y APIs reales no funcionarán en este despliegue estático. La aplicación funcionará visualmente perfecta usando los datos de prueba (mock data) que hemos programado.

Si necesitas desplegar el backend completo (Node.js + Base de datos), necesitarías una configuración diferente (ej: Railway, Render o Vercel Serverless Functions adaptadas).
