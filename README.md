# UI Library Project

Proyecto que contiene una librería de componentes React (`mi-libreria-ui`) y una aplicación web de demostración (`web-front`) que utiliza dichos componentes.

## Estructura del Proyecto

```
ejemplo_lib_npm/
├── mi-libreria-ui/     # Librería de componentes UI React
└── web-front/          # Aplicación web de demostración
```

## Componentes Disponibles

- **Button**: Botones con diferentes variantes (primary, secondary) y tamaños (sm, md, lg)
- **Card**: Tarjetas con diferentes niveles de elevación
- **Modal**: Componentes modales reutilizables

## Configuración para Desarrollo

Este proyecto utiliza `npm link` para desarrollo local, lo que permite trabajar con la librería y la aplicación simultáneamente.

### Prerrequisitos

- Node.js (v18 o superior)
- npm

### Configuración Inicial

1. **Clonar el repositorio:**
```bash
git clone <repo-url>
cd ejemplo_lib_npm
```

2. **Configurar la librería:**
```bash
cd mi-libreria-ui
npm install
npm run build
npm link
```

3. **Configurar la aplicación web:**
```bash
cd ../web-front
npm install
npm link mi-libreria-ui
```

4. **Iniciar desarrollo:**
```bash
cd ../web-front
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Flujo de Desarrollo

#### Para trabajar en la librería:
```bash
cd mi-libreria-ui
# Hacer cambios en los componentes
npm run build  # Reconstruye la librería
```

Los cambios se reflejarán automáticamente en `web-front` debido al enlace simbólico creado por `npm link`.

#### Para trabajar en la aplicación:
```bash
cd web-front
npm run dev  # Inicia el servidor de desarrollo
```

## Scripts Importantes

### mi-libreria-ui
- `npm run build` - Construye la librería para distribución
- `npm run dev` - Modo desarrollo con watch
- `npm test` - Ejecuta tests
- `npm run demo` - Inicia demo local de la librería

### web-front
- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye aplicación para producción
- `npm run preview` - Previsualiza build de producción

## Notas sobre Portabilidad

- `package-lock.json` está excluido del control de versiones
- Cada desarrollador debe generar su propio lockfile
- `npm link` crea enlaces simbólicos locales que no se versionan
- El proyecto está configurado para funcionar en cualquier máquina con Node.js

## Solución de Problemas

### Si los cambios no se reflejan:
1. Asegúrate de haber ejecutado `npm run build` en `mi-libreria-ui`
2. Reinicia el servidor de desarrollo en `web-front`
3. Verifica que el enlace esté activo: `npm ls mi-libreria-ui` en `web-front`

### Si npm link no funciona:
1. Desenlaza primero: `npm unlink mi-libreria-ui` en `web-front`
2. Desenlaza la librería: `npm unlink` en `mi-libreria-ui`
3. Repite el proceso de configuración

## Compatibilidad

- React: ^18.0.0 || ^19.0.0
- Node.js: v18+
- npm: v8+

## Licencia

MIT