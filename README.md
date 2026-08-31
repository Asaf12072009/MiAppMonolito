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
| **Framework Móvil/Web** | React Native CLI (v0.87.1) + react-native-web | Desarrollo multiplataforma (Android, iOS y Navegador Web). |
| **Base de Datos / BaaS** | Firebase Firestore | Base de datos NoSQL en la nube de alta disponibilidad. |
| **Empaquetador (Web)** | Webpack + react-native-web | Configuración personalizada (`webpack.config.js`) para compilar RN a JS/HTML. |
| **Empaquetador (Móvil)** | Metro Bundler | Configuración personalizada (`metro.config.js`) para la optimización de assets. |
| **Gestión de Dependencias** | npm | Control de paquetes y scripts del entorno. |
| **Control de Versiones** | Git & GitHub | Repositorio remoto sincronizado con la rama principal `main`. 

## Layout del Proyecto

```text
MiAppMonolito/
├── public/              # Archivos estáticos que se copian al construir (index.html, favicon.ico)
│   └── index.html       # HTML principal de la aplicación (punto de entrada web)
├── src/                 # Código fuente principal (compartido entre móvil y web)
│   ├── index.ts         # Punto de entrada principal (manipula el renderizado según plataforma)
│   ├── App.tsx          # Componente raíz de la aplicación
│   ├── screens/         # Vistas y pantallas de la interfaz de usuario
│   └── services/        # Lógica de negocio y operaciones con Firebase Firestore
├── android/             # Configuración y código nativo de Android (Gradle, MainActivity.java/kotlin)
├── ios/                 # Configuración y código nativo de iOS (Xcode, AppDelegate.m)
├── .gitignore           # Archivos excluidos del control de versiones
├── .gitattributes       # Normalización de saltos de línea (eol=lf)
├── app.json             # Configuración del nombre y identidad del proyecto
├── index.web.js         # Punto de entrada específico para la compilación Web
├── metro.config.js      # Configuración del empaquetador Metro (Mobile)
├── package.json         # Dependencias, scripts y metadatos del proyecto
├── tsconfig.json        # Configuración del compilador TypeScript
└── webpack.config.js    # Configuración de webpack para el build de la aplicación Web

Notas Importantes
React Native Web: La aplicación se construye para funcionar en navegadores modernos. La configuración de webpack es clave para transformar los componentes de React Native a HTML/CSS compatible.
Firebase: La lógica de services/ es compartida, lo que asegura que el comportamiento de la aplicación sea consistente en móvil y web.
Scripts de construcción: En package.json, deberías tener comandos como npm start (para desarrollo en móvil), npm run web (para desarrollo en web) y npm run build (para compilación final).
