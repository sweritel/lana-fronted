# Lana Del Rey - Sistema de gestión de canciones

Aplicación full stack: frontend en React + TypeScript + Vite y backend en Node.js + Express + MongoDB.

## Requisitos

- Node.js 20 o superior
- MongoDB Community Server (local) o una cuenta en MongoDB Atlas

## 1. Backend (`2-backend-diana`)

```bash
cd 2-backend-diana
npm install
```

Crea un archivo `.env` en la raíz del backend:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/lana_db
```

Para usar MongoDB Atlas, reemplaza `MONGO_URI` por la cadena de conexión de tu cluster (la proporciona Atlas en *Connect → Drivers*). Nunca subas el `.env` a GitHub.

```bash
npx tsx src/app.ts
```

Debe mostrar `Conectado a MongoDB` y `Servidor en http://localhost:3001`.

## 2. Frontend (`1-frontend-diana`)

```bash
cd 1-frontend-diana
npm install
```

Crea un archivo `.env` en la raíz del frontend:

```env
VITE_API_URL=http://localhost:3001
```

Inicia la aplicación:

```bash
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Endpoints de la API

| Método | Ruta           | Descripción               |
|--------|----------------|---------------------------|
| GET    | /canciones     | Lista todas las canciones |
| POST   | /canciones     | Crea una canción          |
| PUT    | /canciones/:id | Actualiza una canción     |
| DELETE | /canciones/:id | Elimina una canción       |

## Estructura del frontend

- `src/types/`: interfaces TypeScript
- `src/services/`: llamadas HTTP a la API
- `src/pages/`: páginas y lógica con React Query
- `src/layouts/`: header, footer y layout general
- `src/components/`: componentes reutilizables