
## 11. Mapeo de Endpoints REST PrestaShop (API Real)

Este proyecto está diseñado para conectarse a una API REST de PrestaShop. A continuación, se detalla el mapeo exacto entre las funcionalidades del Frontend y los Endpoints proporcionados en la documentación de la API.

**Base URL:** `[website_url]/restapi`

### Autenticación y Usuario
| Funcionalidad Frontend | Endpoint PrestaShop | Método | Notas |
| :--- | :--- | :--- | :--- |
| **Login** | `/login` | POST | Devuelve token/cookie de sesión. |
| **Registro** | `/registration` | POST | Campos estándar de registro. |
| **Recuperar Contraseña** | `/passwordrecovery` | POST | |
| **Mi Cuenta (Datos)** | `/accountinfo` | GET | |
| **Mis Direcciones** | `/addresses` | GET/POST/PUT/DELETE | CRUD completo de direcciones. |
| **Mis Pedidos** | `/orderhistory` | GET | Historial de compras. |
| **Detalle Pedido** | `/orderdetail?id_order=X` | GET | |

### Catálogo y Productos
| Funcionalidad Frontend | Endpoint PrestaShop | Método | Notas |
| :--- | :--- | :--- | :--- |
| **Listado Productos** | `/products` | GET | Soporta filtros: `?id_category=2`, `order_by=price`, etc. |
| **Ficha Producto (Full)** | `/products?id_product=X` | GET | Debe devolver: imágenes, atributos, combinaciones, precios específicos. |
| **Categorías (Menú)** | `/categories` | GET | Árbol de categorías para el Navbar. |
| **Buscador** | `/search?s=QUERY` | GET | Usado en la barra de búsqueda global. |
| **Marcas (Brand Stores)** | `/manufacturer` | GET | Listado de marcas y productos por marca. |
| **Novedades** | `/newproducts` | GET | Para la página `/novedades`. |
| **Ofertas** | `/pricesdrop` | GET | Para la página `/ofertas`. |

### Carrito y Checkout
| Funcionalidad Frontend | Endpoint PrestaShop | Método | Notas |
| :--- | :--- | :--- | :--- |
| **Obtener Carrito** | `/cart` | GET | Devuelve el estado actual del carrito. |
| **Añadir Item** | `/cart` | POST | Body: `{id_product, id_product_attribute, quantity}`. |
| **Eliminar Item** | `/cart` | DELETE | |
| **Aplicar Cupón** | `/cart` (Voucher) | POST | Acción `addDiscount`. |
| **Seleccionar Dirección** | `/setaddress` | POST | Paso 1 del Checkout. |
| **Listar Transportistas** | `/carriers` | GET | Paso 2 del Checkout. |
| **Seleccionar Transporte** | `/setcarrier` | POST | |
| **Métodos de Pago** | `/paymentoptions` | GET | Paso 3 del Checkout. |

### Contenido Estático (CMS)
| Funcionalidad Frontend | Endpoint PrestaShop | Método | Notas |
| :--- | :--- | :--- | :--- |
| **Páginas Legales** | `/cms?id_cms=X` | GET | Para Aviso Legal, Privacidad, Envíos, etc. |
| **Sobre Nosotros** | `/cms?id_cms=X` | GET | ID específico para la página About Us. |
| **Tiendas Físicas** | `/stores` | GET | Para la página `/tiendas` (Mapa y listado). |

---

## 12. Guía de Migración a Next.js

Este proyecto React (Vite) ha sido estructurado para facilitar una migración directa a Next.js (App Router o Pages Router).

**Puntos Clave de Compatibilidad:**
1.  **Componentes Puros:** Todos los componentes en `client/src/components` son "Client Components" (`use client`) compatibles.
2.  **Routing:** Se utiliza `wouter` que es similar a `react-router`. Para migrar a Next.js:
    *   Reemplazar `<Link href="...">` de `wouter` por `next/link`.
    *   Mover las rutas de `App.tsx` a la estructura de carpetas `app/` o `pages/`.
3.  **Data Fetching:**
    *   Actualmente usamos `react-query` (TanStack Query) en el cliente.
    *   **En Next.js:** Se puede mantener `react-query` para el cliente, o mover las llamadas iniciales a `getServerSideProps` / `Server Components` para SEO (SSR).
4.  **Estilos:** Tailwind CSS funciona nativamente en Next.js sin cambios.
5.  **Imágenes:** Reemplazar `<img>` por `<Image />` de `next/image` para optimización automática.
