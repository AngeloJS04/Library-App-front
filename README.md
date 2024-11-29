# Library App Frontend

Este es el frontend de la aplicación **Library App**, desarrollada con **Next.js**, **Tailwind CSS**, **DaisyUI** y **Redux RTK**. La aplicación permite a los usuarios gestionar libros en una biblioteca, incluyendo autenticación, búsqueda y filtrado de libros, y la visualización de detalles de un libro específico.

## Requisitos

- **Node.js** (versión 14.x o superior)
- **Yarn** o **npm** (gestores de paquetes)

## Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/AngeloJS04/library-app-front.git
````
### 2. Instala las dependencias

Entra en la carpeta del proyecto e instala las dependencias con npm o yarn:

```bash
cd library-app-front
npm install
````
### 3. Configura las variables de entorno
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
````

### 4. Inicia el servidor de desarrollo
```bash
npm run dev
````
## Características

- **Autenticación de usuario**: Los usuarios pueden iniciar sesión con sus credenciales a través de JWT y almacenar la sesion con cookies.
- **Búsqueda de libros**: Los usuarios pueden buscar libros por nombre, año, género o autor.
- **Filtrado de libros**: Los usuarios pueden aplicar filtros para refinar su búsqueda de libros.
- **Dark / Light **: Dark y Light mode implementado
- **Vista de detalles de libros**: Los usuarios pueden ver detalles de un libro específico, como su nombre, autor, año de publicación, género y descripción.
- **Interfaz moderna y responsiva**: Utiliza **Tailwind CSS** y **DaisyUI** para una experiencia visual atractiva y fácil de usar.

## Tecnologías

- **Next.js**: Framework de React para crear aplicaciones web escalables y optimizadas.
- **Tailwind CSS**: Framework de utilidades CSS para diseñar interfaces rápidamente.
- **DaisyUI**: Componentes pre-estilizados que se integran con Tailwind CSS para una UI aún más rápida.
- **Redux RTK**: Herramienta para gestionar el estado global de la aplicación de manera eficiente, especialmente en la gestión de peticiones a la API.
- **React Query**: Para la gestión de consultas a la API (si es necesario agregarlo).
  
