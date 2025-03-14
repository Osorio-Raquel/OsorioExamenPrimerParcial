# Examen Parcial 1

## Descripción

Este proyecto es un servidor básico en Express.js que se conecta a una base de datos MongoDB y proporciona APIs para gestionar usuarios y productos. Además, registra cada operación realizada en el servidor, como las solicitudes realizadas, y mantiene un seguimiento del número de operaciones y su historial.

## Uso

### Pasos para ejecutar el proyecto

1. **Abrir Visual Studio Code**:
   Abre Visual Studio Code y accede a la carpeta de tu proyecto backend.

2. **Abrir la terminal**:
   En Visual Studio Code, abre la terminal desde el menú superior: `Terminal > Nueva Terminal`.

3. **Ir al directorio del backend**:
   Si no estás en el directorio correcto, usa el siguiente comando para navegar hasta la carpeta `backend`:
   ```bash
   cd backend

4. **Instalar dependencias**: 
Asegúrate de que todas las dependencias estén instaladas. Si no lo has hecho aún, ejecuta el siguiente comando:

npm install

5. **Ejecutar el servidor**:
Una vez que las dependencias estén instaladas, ejecuta el servidor con:

npm server.js
El servidor estará corriendo en http://localhost:3000.

6. **Acceder al directorio público**: 

Ve a http://localhost:3000 en tu navegador para ver los archivos estáticos servidos, como index.html.

7. **Seguir las Operaciones de la API**:
 Cada operación (GET, POST, etc.) realizada al servidor será registrada con el método y la URL de la operación, ademas de mostrada de manera amigable para el usuario. Puedes obtener el número de operaciones y el historial de las operaciones a través de /operaciones y /historial, respectivamente.

## Características

- **Endpoints de API** para usuarios y productos:
  - `/usuarios`: Rutas relacionadas con los usuarios.
  - `/productos`: Rutas relacionadas con los productos.
- **Registro de Operaciones**:
  - Registra el número total de operaciones realizadas (GET, POST, etc.) y mantiene un historial de las solicitudes.
- **Integración con MongoDB**:
  - Se conecta a MongoDB y obtiene datos sobre los usuarios y productos.
- **Carpeta Pública**:
  - Sirve archivos estáticos desde el directorio `public` (por ejemplo, `index.html`).
- **Contadores**:
  - `/contadores`: Devuelve el número total de usuarios y productos en la base de datos.
  - `/operaciones`: Devuelve el número total de operaciones realizadas.
  - `/historial`: Devuelve el historial de las operaciones realizadas.

## Instalación

### Requisitos previos
Asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (o utiliza MongoDB Atlas para hosting en la nube)

### Pasos para Configurar

1. **Clonar el repositorio**:
    ```bash
    git clone <url-del-repositorio>
    cd <directorio-del-proyecto>
    ```

2. **Instalar las dependencias**:
    ```bash
    npm install
    ```

3. **Configurar las Variables de Entorno**:
    Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente variable de entorno:
    ```plaintext
    MONGO_URI=tu_uri_de_mongo
    PORT=3000  # Opcional, por defecto es 3000
    ```

4. **Ejecutar el servidor**:
    ```bash
    npm start
    ```

El servidor estará corriendo en `http://localhost:3000`.

## Endpoints de la API

### `/usuarios`
Maneja las rutas relacionadas con los usuarios (operaciones CRUD para usuarios).

### `/productos`
Maneja las rutas relacionadas con los productos (operaciones CRUD para productos).

### `/contadores`
**GET**: Obtiene el número total de usuarios y productos.
```json
{
    "totalUsuarios": <numero_de_usuarios>,
    "totalProductos": <numero_de_productos>
}

### `/operaciones`
**GET**: Obtiene el número total de operaciones realizadas en el servidor (incluye todos los tipos de solicitudes: GET, POST, PUT, DELETE, etc.). Cada vez que se hace una solicitud, el contador de operaciones se incrementa.

```json
{
    "totalOperaciones": <numero_de_operaciones>
}

### `/historial`
**GET**: Obtiene el historial completo de las operaciones realizadas, incluyendo el número de la operación, el método HTTP y la URL solicitada. Este historial se almacena en memoria mientras el servidor está en ejecución.

```json
{
    "historialOperaciones": [
        "1. GET /usuarios",
        "2. POST /productos",
        "3. GET /operaciones",
        ...
    ]
}

