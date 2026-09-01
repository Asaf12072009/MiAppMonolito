# MiAppMonolito - Aplicación Móvil con React Native y Firebase

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.87.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="iOS" />
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


## Scripts de Construcción

Utiliza los siguientes comandos en la raíz del proyecto para el ciclo de desarrollo y producción:

| Comando | Descripción | Plataforma |
| :--- | :--- | :--- |
| `npm start` | Inicia el empaquetador Metro en modo desarrollo. | 📱 Móvil |
| `npm run web` | Levanta el servidor de desarrollo local para navegadores. | 🌐 Web |
| `npm run build` | Compila y optimiza la aplicación Web para producción. | 📦 Web |

### Notas de Arquitectura

*   **React Native Web:** La aplicación está optimizada para funcionar en navegadores modernos. El archivo `webpack.config.js` es la pieza clave que transforma los componentes nativos en elementos HTML/CSS compatibles.
*   **Firebase Core:** Toda la capa de servicios en `src/services/` es agnóstica a la plataforma. Esto garantiza una sincronización y comportamiento idénticos entre iOS, Android y Web.

---