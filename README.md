# MiAppMonolito - Aplicación Móvil con React Native y Firebase

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.87.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="iOS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

Aplicación móvil desarrollada con React Native CLI, TypeScript y Firebase (Firestore), enfocada en una arquitectura de BaaS (Backend-as-a-Service) para garantizar agilidad y sincronización en tiempo real.

## Arquitectura y Enfoque
El proyecto adopta un enfoque monolítico modular, diseñado para mantener una separación clara de responsabilidades:
* **Capa de Presentación:** Componentes y pantallas organizados por flujos de usuario (`src/screens`).
* **Capa de Servicios:** Lógica de negocio abstraída e interacción directa con Firebase Firestore (`src/services`).
* **Capa Nativa:** Configuración optimizada para Android (`android/`) e iOS (`ios/`).

## Matriz Técnica

| Componente | Tecnología / Librería | Descripción |
| :--- | :--- | :--- |
| **Lenguaje Base** | TypeScript | Tipado estricto y robustez para la lógica de la aplicación. |
| **Framework Móvil** | React Native CLI (v0.87.1) | Desarrollo nativo multiplataforma (Android e iOS). |
| **Base de Datos / BaaS** | Firebase Firestore | Base de datos NoSQL en la nube de alta disponibilidad. |
| **Empaquetador** | Metro Bundler | Configuración personalizada (`metro.config.js`) para la optimización de assets. |
| **Gestión de Dependencias** | npm | Control de paquetes y scripts del entorno. |
| **Control de Versiones** | Git & GitHub | Repositorio remoto sincronizado con la rama principal `main`. |

## Layout del Proyecto

```text
MiAppMonolito/
├── public/              # Archivos estáticos que se copian al construir (index.html, favicon.ico)
│   └── index.html       # HTML principal de la aplicación (punto de entrada web)
├── src/                 # Código fuente principal
│   ├── index.ts         # Punto de entrada de la aplicación (JSX/TSX)
│   ├── App.tsx          # Componente raíz de la aplicación
│   ├── screens/         # Vistas y pantallas de la interfaz de usuario
│   └── services/        # Lógica de negocio y operaciones con Firebase
├── android/             # Configuración y código nativo de Android
├── ios/                 # Configuración y código nativo de iOS
├── .gitignore           # Archivos excluidos del control de versiones
├── .gitattributes       # Normalización de saltos de línea
├── app.json             # Configuración del nombre de la app
├── index.web.js         # Punto de entrada para la versión web
├── metro.config.js      # Configuración de Metro bundler
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
└── webpack.config.js    # Configuración de webpack para el build web
