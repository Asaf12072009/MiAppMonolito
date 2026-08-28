# MiAppMonolito - Aplicación Móvil con React Native y Firebase

Aplicación móvil desarrollada con React Native CLI, TypeScript y Firebase (Firestore), enfocada en una arquitectura de BaaS (Backend-as-a-Service) para garantizar agilidad y sincronización en tiempo real.

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
├── android/             # Configuración y código nativo de Android (Gradle)
├── ios/                 # Configuración y código nativo de iOS
├── src/                 # Código fuente principal de la aplicación
│   ├── screens/         # Vistas y pantallas de la interfaz de usuario
│   ├── services/        # Lógica de negocio y operaciones con Firebase (ej. userService.ts)
│   ├── App.tsx          # Componente raíz de la aplicación
│   └── index.js         # Punto de entrada y registro del componente principal
├── .gitignore           # Archivos y carpetas excluidas del control de versiones
├── .gitattributes       # Normalización de saltos de línea (eol=lf)
├── app.json             # Configuración del nombre e identidad del proyecto
├── metro.config.js      # Configuración del empaquetador Metro
├── package.json         # Dependencias, scripts y metadatos del proyecto
└── tsconfig.json        # Configuración del compilador de TypeScript
