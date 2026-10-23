# RAÍZA - Frontend

[![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellowgreen)](https://github.com/moonthang/yuwelongo-frontend)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev/)

---

## 🚀 Descripción del Proyecto

**RAÍZA** es un diccionario interactivo sobre la lengua indígena **Nasa Yuwe**, acompañado de un **juego educativo**.  

El frontend está construido con **React** y **Create React App**.  
Se conecta con un **Backend Java (Jakarta EE / Servlets)** que maneja la autenticación mediante **JWT** (JSON Web Tokens).

---

## 📚 Tabla de Contenido

1. [🚀 Descripción del Proyecto](#-descripción-del-proyecto)
2. [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
3. [🧱 Estructura del Proyecto](#-estructura-del-proyecto)
4. [⚙️ Configuración del Entorno](#️-configuración-del-entorno)
   1. [1️⃣ Prerrequisitos](#1️⃣-prerrequisitos)
   2. [2️⃣ Instalación de Dependencias](#2️⃣-instalación-de-dependencias)
5. [👨‍💻 Autores](#-autores)

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología | Uso Principal |
|:--|:--|:--|
| **Frontend** | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="20"/> React (JavaScript) | Componentes, Hooks (`useState`, `useEffect`) |
| **Entorno de desarrollo** | <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="20"/> Create React App | Entorno de desarrollo y scripts de compilación |
| **Formularios** | Formik + Yup | Manejo y validación de formularios |
| **Comunicación API** | `fetch` API / `userService.js` | Peticiones HTTP al backend |
| **Backend asociado** | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMilleAcaXi-_WC8RbF50_DfoTBPdn1nlzA&s" width="20"/> Java Servlets (Jakarta EE) | API RESTful |
| **Seguridad** | <img src="https://jwt.io/img/pic_logo.svg" width="20"/> JWT (JSON Web Tokens) | Autenticación y sesiones |
| **Estilos** | Bootstrap 5 + CSS | Diseño y estructura visual |

---

## 🧱 Estructura del Proyecto
A continuación, se detalla la organización de los archivos y directorios principales del proyecto, siguiendo una estructura modular y basada en componentes:

```
yuwelongo-frontend/
└── yuwelongo-web/
    ├── src/
    │   ├── components/
    │   │   ├── layout/ # Componentes de maquetación (Header, Footer, etc.)
    │   │   └── ui/ # Componentes UI atómicos y genéricos (Loader, etc.)
    │   ├── context/ # Contextos globales de React
    │   │   ├── AuthContext.js # Maneja el estado de autenticación y sesión del usuario.
    │   │   └── ToastContext.js # Provee una función para mostrar notificaciones (toasts).
    │   ├── hooks/ # Hooks personalizados para lógica reutilizable.
    │   ├── pages/ # Vistas principales de la aplicación.
    │   │   ├── admin/ # Páginas del panel de administración.
    │   │   └── public/ # Páginas públicas (Inicio, Diccionario, Juego).
    │   ├── services/ # Módulos para interactuar con APIs y servicios externos.
    │   │   ├── mediaService.js # Lógica para subir y eliminar archivos (imágenes, audios).
    │   │   └── userService.js # Funciones para login, registro y gestión de usuarios.
    │   ├── styles/ # Estilos globales (App.css, index.css).
    │   └── index.js # Punto de entrada de la aplicación React.
    ├── public/ # Archivos estáticos (index.html, favicons, etc.).
    ├── .env # Variables de entorno (claves de API, URLs de backend).
    └── package.json # Dependencias y scripts del proyecto.
```

## ⚙️ Configuración del Entorno

### 1️⃣ Prerrequisitos

Asegúrate de tener instalado en tu equipo:

- 🟩 **Node.js** (v18 o superior) y **npm**
- 🟦 **Git**
- 🔧 El **Backend YuweLongo** ejecutándose en local o remoto  
  👉 [Repositorio del Backend](https://github.com/moonthang/yuwelongo-backend)

---

### 2️⃣ Instalación de Dependencias

Sigue estos pasos para configurar el proyecto localmente:

---

### Pasos de Instalación

1.  **Clonar el repositorio**:
    ```bash
    git clone [https://github.com/moonthang/yuwelongo-frontend](https://github.com/moonthang/yuwelongo-frontend)
    ```
2.  **Acceder a la carpeta del proyecto**:
    ```sh
    cd yuwelongo-frontend
    ```
3.  **Configurar variables de entorno**:
    Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`. Luego, edita el archivo `.env` y añade tus claves de API de Firebase.
    ```sh
    cp .env.example .env
    ```
4.  **Instalar dependencias**:
    ```bash
    npm install
    ```
5.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm start
    ```

## 👨‍💻 Autores

**RAÍZA - Frontend** fue desarrollado por **Miguel Angel Sepulveda Burgos** y **Faeli Yobana Nez Fiole**.

*   <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" width="20" height="20"/> GitHub: [@moonthang](https://github.com/moonthang)
*   <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" width="20" height="20"/> LinkedIn: [Miguel Ángel Sepulveda Burgos](https://www.linkedin.com/in/miguel-%C3%A1ngel-sep%C3%BAlveda-burgos-a87808167/)

*   <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" width="20" height="20"/> GitHub: [@fae320](https://github.com/fae320)