# MiAppMonolito - Aplicación Móvil Monolitica con iOS y Android 

Aplicación móvil monolítica desarrollada con React Native, TypeScript, TypeORM y SQLite para la gestión local de datos y estructura escalable.

## Matriz Técnica

| Componente | Tecnología / Librería | Descripción |
| :--- | :--- | :--- |
| **Lenguaje Base** | TypeScript | Tipado estricto y robustez para la lógica del monolito. |
| **Framework Móvil** | React Native CLI | Desarrollo nativo multiplataforma (Android e iOS). |
| **Base de Datos** | SQLite (better-sqlite3) | Almacenamiento local persistente y de alto rendimiento. |
| **ORM** | TypeORM | Mapeo objeto-relacional con soporte de decoradores y entidades. |
| **Gestión de Dependencias** | npm | Control de paquetes y scripts del entorno. |
| **Control de Versiones** | Git & GitHub | Repositorio remoto sincronizado con rama principal `main`. |

## Layout del Proyecto

```text
MiAppMonolito/
├── android/             # Configuración y código nativo de Android
├── ios/                 # Configuración y código nativo de iOS
├── src/                 # Código fuente principal de la aplicación
│   ├── database/        # Configuración de TypeORM y conexión a SQLite
│   ├── screens/         # Vistas y pantallas de la interfaz de usuario
│   ├── services/        # Lógica de negocio y operaciones CRUD (ej. userService.ts)
│   ├── App.tsx          # Componente raíz de la aplicación
│   └── index.ts         # Punto de entrada y registro del componente principal
├── .gitignore           # Archivos y carpetas excluidas del control de versiones
├── .gitattributes       # Normalización de saltos de línea (eol=lf)
├── app.json             # Configuración del nombre e identidad del proyecto
├── package.json         # Dependencias, scripts y metadatos del proyecto
└── tsconfig.json        # Configuración del compilador de TypeScript
