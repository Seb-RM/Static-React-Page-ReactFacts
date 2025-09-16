# React Facts 🌟

Una aplicación simple y elegante de React que muestra datos curiosos sobre React, construida como una página estática para demostrar conceptos fundamentales de React y arquitectura basada en componentes.

## 📸 Vista Previa

<div align="center" width="">
  
![App Screenshot](/public/Captura-ReactFacts.png)
  
</div>

## 📋 Descripción

React Facts es un proyecto amigable para principiantes que muestra trivia interesante sobre la biblioteca React. Esta aplicación sirve como una introducción para construir interfaces de usuario con React, enfatizando la estructura de código limpia, componentes reutilizables y prácticas modernas de desarrollo web.

## ✨ Características

- **Diseño Responsivo**: Diseño optimizado que funciona en diferentes tamaños de pantalla.
- **Arquitectura Basada en Componentes**: Componentes modulares para un mantenimiento y escalabilidad fáciles.
- **Visualización de Contenido Estático**: Renderizado eficiente de información estática sin gestión compleja de estado.
- **Estilos Personalizados**: CSS adaptado para una apariencia visual atractiva y profesional.
- **Integración del Logo de React**: Incorpora elementos de marca de React para autenticidad.

## 🔧 Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario con componentes y JSX.
- **JavaScript (ES6+)**: Características modernas de JavaScript para código limpio y eficiente.
- **CSS3**: Hojas de estilo personalizadas para diseño, animaciones y efectos visuales.
- **Vite**: Herramienta de construcción para desarrollo rápido y builds optimizados para producción.
- **HTML5**: Marcado semántico para accesibilidad y SEO.

## 🚀 Funcionalidad

La aplicación consta de tres componentes principales:

### Componente App (`src/App.jsx`)

El componente raíz que orquesta toda la aplicación. Importa y renderiza los componentes `Navbar` y `Main`, proporcionando la estructura general.

```jsx
import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Main />
        </>
    );
}
```

Este componente demuestra la **composición de componentes** de React, donde componentes más pequeños y reutilizables se combinan para formar la UI completa. Utiliza sintaxis JSX para renderizado declarativo, haciendo el código intuitivo y fácil de entender.

### Componente Navbar (`src/components/Navbar.jsx`)

Un componente de encabezado que muestra el logo de React y el título de la aplicación. Maneja el renderizado de contenido estático y la gestión de activos de imagen.

```jsx
import React from "react";
import reactLogo from "../assets/react-logo.png";

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src={reactLogo} alt="React Logo" />
                    <span>React Facts</span>
                </nav>
            </header>
        </>
    );
}
```

Conceptos clave aplicados:

- **Importación de Activos**: Demuestra cómo importar y usar activos de imagen en componentes de React.
- **Elementos JSX**: Utiliza JSX para crear elementos HTML semánticos como `<header>`, `<nav>` y `<img>`.
- **Accesibilidad**: Incluye el atributo `alt` para lectores de pantalla, promoviendo un diseño inclusivo.

### Componente Main (`src/components/Main.jsx`)

El área de contenido principal que presenta una lista de datos curiosos sobre React. Este componente se enfoca en mostrar información estática en un formato atractivo.

```jsx
import React from "react";

export default function Main() {
    return (
        <main>
            <h1>¡Datos curiosos sobre React!</h1>
            <ul className="facts-list">
                <li>Fue lanzado por primera vez en 2013</li>
                <li>Fue creado originalmente por Jordan Walke</li>
                <li>Tiene más de 200k estrellas en GitHub</li>
                <li>Es mantenido por Meta</li>
                <li>Potencia miles de aplicaciones empresariales, incluyendo apps móviles</li>
            </ul>
        </main>
    );
}
```

Este componente muestra:

- **JSX para Marcado**: Renderizado declarativo de elementos similares a HTML dentro de JavaScript.
- **Atributo ClassName**: Aplicando clases CSS para estilos, equivalente al atributo `class` de HTML.
- **Renderizado de Listas**: Usando elementos `<ul>` y `<li>` para estructurar y mostrar datos.

### Manejo del DOM y Renderizado (`src/main.jsx`)

El punto de entrada que inicializa la aplicación de React y la monta en el DOM.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Este archivo ilustra:

- **ReactDOM.createRoot**: API moderna para crear un contenedor raíz para renderizar componentes de React.
- **Selección del DOM**: Usando `document.getElementById` para apuntar al punto de montaje en el HTML.
- **Renderizado de Componentes**: Montando el componente `App` en el DOM, activando el renderizado del árbol de componentes.

## 🎨 Estilos y UI

La aplicación cuenta con CSS personalizado que mejora el atractivo visual:

- Tema oscuro con acentos azules característicos de React (#61DAFB).
- Diseño responsivo centrado en la página.
- Animaciones de logo y efectos hover para interactividad.
- Integración de imagen de fondo para interés visual.

## 📁 Estructura del Proyecto

```
react-facts/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── react-logo.png
│   │   └── react-logo-half.png
│   ├── components/
│   │   ├── Main.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 📖 Cómo Usar

1. **Ver los Datos**: La aplicación muestra una lista curada de datos interesantes sobre React al cargar.
2. **Experiencia Responsiva**: Cambia el tamaño de tu navegador o visualiza en dispositivos móviles para ver el diseño adaptativo.
3. **Sin Interacción del Usuario Requerida**: Esta es una aplicación de visualización estática sin formularios o interacciones dinámicas.

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- Gestor de paquetes npm o yarn

### Pasos para Ejecutar Localmente

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/Seb-RM/Static-React-Page-ReactFacts.git
   cd react-facts
   ```

2. **Instalar Dependencias**

   ```bash
   npm install
   ```

3. **Iniciar el Servidor de Desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el Navegador**
   Navega a `http://localhost:5173` (o el puerto mostrado en tu terminal) para ver la aplicación.

### Construir para Producción

```bash
npm run build
```

Esto crea un build optimizado en la carpeta `dist`, listo para despliegue.
