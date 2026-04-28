# Mi Librería UI

Una librería de componentes React con estilos consistentes y personalizables, diseñada para ser utilizada en múltiples aplicaciones manteniendo una interfaz visual unificada.

## 🚀 Características

- ✅ **Componentes reutilizables**: Button, Card, Modal
- ✅ **CSS tradicional con metodología BEM**
- ✅ **Variables CSS personalizables**
- ✅ **Diseño responsive**
- ✅ **Tests unitarios con Jest**
- ✅ **Build optimizado con Rollup**
- ✅ **Demo interactivo incluido**
- ✅ **Compatible con React 18+**

## 📦 Instalación

```bash
npm install mi-libreria-ui
# o
yarn add mi-libreria-ui
```

## 🎯 Uso Básico

```jsx
import React from 'react';
import { Button, Card, Modal } from 'mi-libreria-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Mi Tarjeta">
        <p>Contenido de la tarjeta</p>
      </Card>
    </div>
  );
}
```

## 📚 Componentes

### Button

Botón con múltiples variantes y tamaños.

```jsx
import { Button } from 'mi-libreria-ui';

// Variantes
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Estados
<Button disabled>Deshabilitado</Button>
```

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Variante visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `disabled` | `boolean` | `false` | Si el botón está deshabilitado |
| `onClick` | `function` | - | Función al hacer clic |
| `type` | `string` | `'button'` | Tipo del botón |
| `className` | `string` | `''` | Clases CSS adicionales |

### Card

Tarjeta con contenido flexible y diferentes niveles de elevación.

```jsx
import { Card } from 'mi-libreria-ui';

<Card title="Título de la Tarjeta" elevation="md">
  <p>Contenido de la tarjeta</p>
  <Button>Aceptar</Button>
</Card>
```

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | - | Título de la tarjeta |
| `elevation` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Nivel de sombra/elevación |
| `children` | `ReactNode` | - | Contenido de la tarjeta |
| `className` | `string` | `''` | Clases CSS adicionales |

### Modal

Ventana modal con overlay y animaciones suaves.

```jsx
import { Modal } from 'mi-libreria-ui';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Título del Modal"
      >
        <p>Contenido del modal</p>
        <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
      </Modal>
    </>
  );
}
```

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Si el modal está visible |
| `onClose` | `function` | - | Función para cerrar el modal |
| `title` | `string` | - | Título del modal |
| `children` | `ReactNode` | - | Contenido del modal |
| `closeOnBackdrop` | `boolean` | `true` | Si se cierra al hacer clic fuera |
| `className` | `string` | `''` | Clases CSS adicionales |

## 🎨 Personalización

La librería utiliza variables CSS que puedes sobreescribir:

```css
:root {
  --color-primary: #tu-color;
  --color-secondary: #tu-color;
  --font-family-sans: 'Tu Font', sans-serif;
  --border-radius-lg: 12px;
}
```

## 🛠️ Desarrollo

### Prerequisites

- Node.js 16+
- React 18+

### Instalación Local

```bash
# Clonar el repositorio
git clone <repository-url>
cd mi-libreria-ui

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Desarrollo con watch
npm run dev

# Build para producción
npm run build

# Ejecutar tests
npm run test

# Tests con watch
npm run test:watch

# Coverage de tests
npm run test:coverage

# Iniciar demo local
npm run demo
```

### Estructura del Proyecto

```
mi-libreria-ui/
├── src/
│   ├── components/          # Componentes UI
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Modal/
│   ├── styles/              # Estilos globales
│   ├── demo/                # Demo interactivo
│   └── index.js             # Export principal
├── tests/                   # Tests unitarios
├── dist/                    # Build de producción
├── rollup.config.js         # Configuración de Rollup
└── package.json
```

## 📋 Guía de Publicación NPM

### 1. Preparación

Asegúrate de tener una cuenta en [npmjs.com](https://www.npmjs.com).

### 2. Login en NPM

```bash
npm login
# Ingresa tu username, password y email
```

### 3. Verificar el package.json

Confirma que el `package.json` tenga la información correcta:

```json
{
  "name": "mi-libreria-ui",
  "version": "1.0.0",
  "main": "dist/mi-libreria-ui.cjs.js",
  "module": "dist/mi-libreria-ui.esm.js",
  "files": ["dist"]
}
```

### 4. Build del Proyecto

```bash
npm run build
```

Esto generará los archivos en la carpeta `dist/`:
- `mi-libreria-ui.esm.js` (ES Module)
- `mi-libreria-ui.cjs.js` (CommonJS)
- `mi-libreria-ui.umd.js` (UMD para CDN)
- `styles.css` (Estilos compilados)

### 5. Versionamiento Semántico

Antes de publicar, actualiza la versión según los cambios:

```bash
# Para bug fixes (patch)
npm version patch

# Para nuevas features (minor)
npm version minor

# Para cambios breaking (major)
npm version major
```

### 6. Publicación

```bash
npm publish
```

### 7. Verificación

Verifica que tu paquete esté disponible:

```bash
npm view mi-libreria-ui
```

### 8. Publicación de Actualizaciones

Para publicar nuevas versiones:

```bash
# 1. Haz tus cambios
# 2. Actualiza la versión
npm version patch  # o minor/major

# 3. Build
npm run build

# 4. Publica
npm publish
```

### ⚠️ Notas Importantes

- **Verifica el nombre**: Asegúrate que el nombre del paquete esté disponible en NPM
- **Test local**: Prueba la librería localmente antes de publicar
- **Documentación**: Mantén el README actualizado
- **Versionamiento**: Usa semantic versioning consistentemente
- **Dependencies**: Revisa que las peer dependencies sean correctas

## 🧪 Testing

La librería incluye tests unitarios con Jest y React Testing Library:

```bash
# Ejecutar todos los tests
npm test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

### Coverage

El objetivo es mantener un coverage mínimo del 80% en todas las métricas:
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

## 🌟 Demo Interactivo

Ejecuta el demo local para ver todos los componentes en acción:

```bash
npm run demo
```

El demo estará disponible en `http://localhost:3000`

## 📄 Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una feature branch (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o encuentras un issue:

1. Revisa la documentación
2. Busca issues existentes
3. Crea un nuevo issue con detalles
4. Contacta al mantenedor del proyecto

---

**Creado con ❤️ para la comunidad React**
