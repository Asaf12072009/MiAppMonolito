# MiAppMonolito - Aplicación Móvil con React Native y Firebase

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.87.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="iOS" />
  <img src="https://img.shields.io/badge/Kotlin-0073EC?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Objective--C-4E5B6E?style=for-the-badge&logo=apple&logoColor=white" alt="Objective-C" />
  <img src="https://img.shields.io/badge/Objective--C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="Objective-C++" />
  <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" alt="Ruby" />
  <img src="https://img.shields.io/badge/Cocoapods-FA4E30?style=for-the-badge&logo=cocoapods&logoColor=white" alt="Cocoapods" />
</p>

Aplicación móvil desarrollada con React Native CLI, TypeScript y Firebase (Firestore), enfocada en una arquitectura de BaaS (Backend-as-a-Service) para garantizar agilidad y sincronización en tiempo real.

---

## 🏗️ Arquitectura y Enfoque

El proyecto adopta un enfoque monolítico modular, diseñado para mantener una separación clara de responsabilidades:
* **Capa de Presentación:** Componentes y pantallas organizados por flujos de usuario (`src/screens`).
* **Capa de Servicios:** Lógica de negocio abstraída e interacción directa con Firebase Firestore (`src/services`).
* **Capa Nativa:** Configuración optimizada para Android (`android/`) e iOS (`ios/`).

### 💡 Notas de Arquitectura
* **React Native Web:** La aplicación está optimizada para funcionar en navegadores modernos. El archivo `webpack.config.js` es la pieza clave que transforma los componentes nativos en elementos HTML/CSS compatibles.
* **Firebase Core:** Toda la capa de servicios en `src/services/` es agnóstica a la plataforma. Esto garantiza una sincronización y comportamiento idénticos entre iOS, Android y Web.

---

## 📊 Matriz Técnica

| Componente | Tecnología / Librería | Descripción |
| :--- | :--- | :--- |
| **Lenguaje Base** | TypeScript | Tipado estricto y robustez para la lógica de la aplicación. |
| **Framework Móvil/Web** | React Native CLI (v0.87.1) + react-native-web | Desarrollo multiplataforma (Android, iOS y Navegador Web). |
| **Base de Datos / BaaS** | Firebase Firestore | Base de datos NoSQL en la nube de alta disponibilidad. |
| **Empaquetador (Web)** | Webpack + react-native-web | Configuración personalizada (`webpack.config.js`) para compilar RN a JS/HTML. |
| **Empaquetador (Móvil)** | Metro Bundler | Configuración personalizada (`metro.config.js`) para la optimización de assets. |
| **Gestión de Dependencias** | npm | Control de paquetes y scripts del entorno. |
| **Control de Versiones** | Git & GitHub | Repositorio remoto sincronizado con la rama principal `main`. |

---

## 🔧 Soporte Nativo y Dependencias

Aunque el 100% de la lógica de negocio y las interfaces de usuario se desarrollan utilizando **TypeScript**, el proyecto integra archivos de código nativo en las carpetas `/android` e `/ios`. Esto se debe a la instalación de módulos y librerías de terceros (como el SDK de Firebase), que requieren andamiaje e interoperabilidad en los siguientes lenguajes:

* 🤖 **Kotlin:** Utilizado en las configuraciones modernas y dependencias del entorno de Android.
* 🍏 **Objective-C / Objective-C++:** Presente en los módulos nativos tradicionales y puentes (bridges) de iOS. 
* 💎 **Ruby:** Empleado exclusivamente para la gestión de dependencias nativas a través de CocoaPods (`Podfile` y `Gemfile`). 

Todo este entorno nativo viene preconfigurado por las dependencias instaladas, permitiendo que la aplicación se ejecute con un rendimiento óptimo en cada sistema operativo sin necesidad de alterar manualmente el código base móvil.

---

## 📂 Layout del Proyecto

Estructura organizada de directorios orientada al desarrollo multiplataforma con código fuente unificado:

```text
MiAppMonolito/
├── public/              # Archivos estáticos globales (index.html, favicon.ico)
├── src/                 # Código fuente principal (Lógica compartida)
│   ├── screens/         # Vistas, componentes y pantallas de la interfaz de usuario
│   ├── services/        # Lógica de negocio e integraciones (Firebase Firestore)
│   ├── App.tsx          # Componente raíz de la aplicación
│   └── index.ts         # Punto de entrada principal (Enrutamiento por plataforma)
├── android/             # Entorno nativo y configuración de Android (Gradle)
├── ios/                 # Entorno nativo y configuración de iOS (Xcode / CocoaPods)
├── app.json             # Identidad y metadatos compartidos del proyecto
├── index.web.js         # Punto de entrada exclusivo para la plataforma Web
├── metro.config.js      # Configuración del empaquetador Metro (Mobile)
├── tsconfig.json        # Configuración del compilador TypeScript
└── webpack.config.js    # Configuración de Webpack para empaquetado Web
```

---

## 🚀 Scripts de Construcción

Utiliza los siguientes comandos en la raíz del proyecto para el ciclo de desarrollo y producción:

| Comando | Descripción | Plataforma |
| :--- | :--- | :--- |
| `npm start` | Inicia el empaquetador Metro en modo desarrollo. | 📱 Móvil |
| `npm run web` | Levanta el servidor de desarrollo local para navegadores. | 🌐 Web |
| `npm run build` | Compila y optimiza la aplicación Web para producción. | 📦 Web |
