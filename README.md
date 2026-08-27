# mi-monolito-application

MiAppMonolito/
├── android/                  # Código nativo de Android (Gradle)
├── ios/                      # Código nativo de iOS (CocoaPods)
├── src/
│   ├── database/
│   │   ├── dataSource.ts     # Configuración de TypeORM
│   │   └── entities/
│   │       └── User.ts       # Entidad de la BD
│   ├── services/
│   │   └── userService.ts    # Lógica de negocio / operaciones CRUD
│   ├── screens/
│   │   └── HomeScreen.tsx    # Pantallas de la UI
│   └── App.tsx               # Componente raíz
├── index.js                  # Punto de entrada de React Native CLI
├── tsconfig.json             # Configuración de TypeScript
└── package.json
