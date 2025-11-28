# Manual de Lógica de Negocio (Frontend a Backend)

Este documento detalla las reglas de negocio implementadas en el prototipo Frontend que deben ser replicadas o soportadas por el Backend en la versión final.

## 1. Sistema de Packs Virtuales (Nicokits)
**Ubicación:** `client/src/components/product/product-details.tsx` -> `handleAddToCart`

El frontend actualmente simula la creación de "packs" añadiendo múltiples ítems al carrito cuando se selecciona un nivel de nicotina en líquidos Longfill.

**Lógica Actual:**
- Si `nicotine == "1.5mg"`: Añade 1x Nicokit 10mg.
- Si `nicotine == "3mg"`: Añade 2x Nicokits 20mg.
- **Cálculo de Precio:** Suma el precio de los nicokits al precio base visualmente, pero al carrito se envían como productos separados con sus propios precios.

**Requerimiento Backend:**
- Necesitará un endpoint que acepte "bundles" o lógica en el carrito para agrupar estos ítems, o simplemente mantener la lógica de añadir múltiples SKUs al pedido.

## 2. Perfil de Sabor (Flavor Profile)
**Ubicación:** `client/src/lib/mock-data.ts` (Modelo de datos)

Cada producto líquido tiene un objeto `flavorProfile`:
```typescript
flavorProfile: {
  freshness: 90, // 0-100
  sweetness: 10, // 0-100
  throatHit: 85  // 0-100
}
```

**Requerimiento Backend:**
- La base de datos de productos debe incluir estas columnas o un campo JSON para almacenar estos valores numéricos.

## 3. Sistema "Completa tu Kit" (Accesorios)
**Ubicación:** `client/src/components/product/product-details.tsx` -> `HardwareBundleConfigurator`

Permite seleccionar accesorios compatibles (resistencias, pyrex) directamente desde la ficha del dispositivo.

**Requerimiento Backend:**
- Relación `Many-to-Many` entre Productos (Padre) y Accesorios (Hijos).
- El endpoint de producto debe devolver la lista de `compatibleAccessories` con su stock y precio actual.

## 4. Preguntas Frecuentes (FAQs) Dinámicas
**Ubicación:** `client/src/pages/product.tsx`

Actualmente las FAQs son estáticas en el componente.

**Requerimiento Backend:**
- Idealmente, las FAQs deberían ser un campo de texto enriquecido en la base de datos del producto, o generarse dinámicamente mediante IA en el backend basándose en la descripción del producto antes de servirse a la API.

## 5. Variantes de Color (Hardware)
**Ubicación:** `client/src/lib/mock-data.ts`

Los productos de hardware tienen un array de colores con metadatos específicos (Hex code e imagen asociada).

```typescript
colors: [
  { name: "Dark Black", hex: "#1a1a1a", image: "url..." },
  ...
]
```

**Requerimiento Backend:**
- Tabla de variantes que soporte códigos de color HEX para mostrar la "bolita" de color correctamente en el frontend.

## 6. Ficha Técnica (Specs)
**Ubicación:** `client/src/lib/mock-data.ts`

La ficha técnica se renderiza dinámicamente a partir de un array de objetos clave-valor.

```typescript
specs: [
  { name: "Dimensiones", value: "138.5 x 44 x 29 mm" },
  { name: "Potencia", value: "5-220W" },
  ...
]
```

**Requerimiento Backend:**
- El producto debe tener un campo JSONB (en PostgreSQL) o una tabla relacionada `ProductSpecs` para almacenar estos pares `Nombre: Valor`. Esto permite flexibilidad total sin tener columnas fijas para cada especificación técnica posible.

## 7. Estrategia de Datos (Producción)
**Nota para el Desarrollador:**
El usuario ha planteado la necesidad de poblar estos datos automáticamente.

**Recomendación de Implementación:**
- **Ingesta:** Al importar productos (desde CSV/ERP) o al crear nuevos productos, se recomienda implementar un **Servicio de Extracción IA** (usando OpenAI/Anthropic) en el backend.
- **Flujo:** 
  1. El sistema recibe la descripción en texto plano del proveedor.
  2. La IA analiza el texto y extrae las especificaciones técnicas (Dimensiones, Batería, etc.).
  3. Estas especificaciones se **guardan** en la base de datos como datos estructurados (JSON/Tabla).
- **Frontend:** El frontend siempre lee los datos estructurados de la DB, nunca "parsea" la descripción en tiempo real por rendimiento.

## 8. Iconos de Sabores en Tarjetas de Producto
**Ubicación:** Tarjetas de producto en `ProductSection` o Vistas de Categoría.

**Requerimiento Backend:**
- El producto debe tener una lista de "Etiquetas de Sabor" (e.g., `["fresa", "hielo", "sandia"]`) almacenada en la base de datos.
- **Lógica de Mapeo:** El frontend mantendrá un diccionario estático que mapea estas etiquetas a iconos SVG (ej: `fresa` -> Icono Fresa).
- **Ingesta IA:** Al igual que las specs, la IA debe detectar los sabores principales de la descripción y asignar las etiquetas correspondientes automáticamente.

## 9. Asistente de Mezcla (Longfills & Alquimia)
**Ubicación:** `client/src/components/product/mix-wizard.tsx`

Esta herramienta permite a los usuarios comprar líquidos "Longfill" sin hacer cálculos matemáticos, añadiendo automáticamente los productos necesarios (Nicokits y Base) al carrito.

**Flujo de Datos & Requerimientos:**

1.  **Flag de Producto:** El Backend debe identificar los productos que requieren este asistente.
    *   Campo `type` = `'longfill'`
    *   Campo `bottleCapacity` (int): Capacidad total del bote (ej. 30, 60, 120).
    *   Campo `contentAmount` (int): Cantidad real de aroma (ej. 10, 12, 24).

2.  **Lógica de Cálculo (Frontend):**

    **A. Modo Estándar (Freebase) - Para botellas > 30ml**
    *   Opciones de Nicotina: 0, 1.5, 3, 6 mg/ml.
    *   `Espacio Libre` = `bottleCapacity` - `contentAmount` - `Volumen Nicokits`.
    *   **Selección de Nicokits:**
        *   Elige entre Nicokits de **20mg** (estándar) o **10mg** (ajuste fino) para aproximarse mejor al objetivo.
    *   **Relleno de Base:**
        *   Si `Espacio Libre` > 20ml: Busca la botella de base más pequeña disponible (70ml, 85ml, 90ml).
        *   Si `Espacio Libre` <= 20ml: Rellena el espacio restante usando **Nicokits de 0mg** (10ml cada uno).

    **B. Modo Sales (Salt Nicotine) - Para botellas <= 30ml**
    *   Se activa automáticamente si `bottleCapacity <= 30` o mediante flag.
    *   Opciones de Nicotina: 0, 6.6, 10, 15 mg/ml.
    *   **Recetas Específicas (para 30ml):**
        *   **0mg:** 2x Nicokit Salt 0mg (Relleno).
        *   **6.6mg:** 2x Nicokit Salt 10mg (Opción económica).
        *   **10mg:** 2x Nicokit Salt 15mg.
        *   **15mg:** 2x Nicokit Salt 20mg (Máximo legal).

3.  **Acción de Compra:**
    *   Al pulsar "Añadir", el frontend envía al carrito los items por separado:
        1.  Producto Principal (Longfill).
        2.  X unidades de Nicokit con Nicotina (Normal o Salt).
        3.  Y unidades de Nicokit 0mg (Relleno) **O** 1 unidad de Base grande.

**Recomendación Backend:**
*   Tener SKUs específicos para:
    *   "Nicokit Freebase 20mg", "Nicokit Freebase 10mg".
    *   "Nicokit Salt 10mg", "Nicokit Salt 15mg", "Nicokit Salt 20mg".
    *   "Nicokit 0mg" (Relleno universal).
*   Validar stock de los componentes auxiliares al añadir el pack.
*   Soportar la lógica de bundles dinámicos.

**Casos de Prueba (Demo en `/mix-demo`):**
*   **Mini Longfill (30ml):** Prioriza Sales y relleno con Nicokits 0mg.
*   **Estándar (60ml):** Usa Freebase y bases de 70ml/85ml.
*   **Maxi (100ml/120ml):** Ajusta nicokits proporcionalmente.

## 10. Lógica de Vista Rápida (Quick Add Logic)
**Ubicación:** `client/src/components/product/quick-add-popover.tsx`

El sistema de "Compra Rápida" utiliza un patrón de **Polimorfismo de Interfaz** para decidir qué opciones mostrar al usuario sin recargar la página.

**Árbol de Decisión:**

1.  **¿Es Hardware?** (`type === 'hardware'`)
    *   **Muestra:** Selector de Colores (Visual) + Accesorios Compatibles.
    *   **Lógica:** Permite añadir el kit base + múltiples accesorios al carrito en un solo clic.

2.  **¿Es Longfill Avanzado?** (`type === 'longfill'` con `bottleCapacity` definido)
    *   **Muestra:** El **Mix Wizard** completo (ver punto 9).
    *   **Lógica:** Calculadora de alquimia embebida en el popup.

3.  **¿Es Consumible con Descuentos?** (`tierPricing` existe)
    *   **Muestra:** Selector de Variantes (ej. Ohmios) + Tabla de Descuento por Volumen.
    *   **Lógica:**
        *   Permite elegir variante (con control de stock).
        *   Calcula el descuento en tiempo real según la cantidad seleccionada.
        *   Aplica el precio unitario reducido al añadir al carrito.

4.  **Fallback (Producto Simple):**
    *   **Muestra:** Selector de Cantidad simple.
    *   **Lógica:** Añade SKU estándar.

**Requerimiento Backend:**
*   El endpoint de producto debe devolver toda la metadata necesaria (`tierPricing`, `variants`, `colors`, `compatibleAccessories`) incluso en los listados de categoría (endpoint "light") para evitar latencia al abrir el popup.
