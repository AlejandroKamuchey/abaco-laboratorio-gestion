# Ábaco · Laboratorio de gestión

Dashboard visual e interactivo para enseñar gestión empresarial en FP.

**[Abrir la demo](https://abaco-laboratorio-gestion.alexisdemo05.chatgpt.site)**

## Funcionalidades

- Filtros por periodo y categoría, gráficos y detalle de productos.
- Simulador de precios, costes de compra y plazos de cobro.
- Comparación entre escenario original y propuesto.
- Explicaciones calculadas y caso práctico con solución.
- Diseño adaptable a móvil y navegación por teclado.

Los datos son ficticios. No hay IA conectada, cuentas de usuario ni base de datos necesaria. El modelo mantiene constante el volumen de venta; sus supuestos se pueden consultar en la interfaz.

## Ejecutar en local

Requiere Node.js 22.13 o superior y npm.

```sh
npm ci
npm run dev
```

Abre la dirección local indicada en la terminal.

```sh
npx tsc --noEmit
npm run build
```

## Tecnología

React, TypeScript, Vinext/Vite, Fluent UI y Recharts. Tipografía Geist alojada con el proyecto. El proyecto incluye la infraestructura del starter de Sites; el identificador de publicación se omite para permitir su reutilización.

## Código principal

- `app/page.tsx`: dashboard e interacciones.
- `app/globals.css`: diseño adaptable.
- `lib/model.ts`: datos y cálculo de escenarios.

La demo está alojada en Sites. Este repositorio publica su código fuente; no configura GitHub Pages.
