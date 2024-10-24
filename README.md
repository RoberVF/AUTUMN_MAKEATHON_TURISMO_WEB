# Koala Garden's Hotel App

## Descripción

Esta aplicación ha sido desarrollada para la **AUTUMN MAKEATHON** de la **Fundación Sergio Alonso**. 
Koala Garden's Hotel es una aplicación web interactiva diseñada para mejorar la experiencia del cliente en el hotel. Los usuarios pueden realizar check-in, acceder a información sobre sus habitaciones y hacer preguntas a una inteligencia artificial para obtener respuestas rápidas sobre su estancia.

## Motivos e inconvenientes
Originalmente, se pensó en desarrollar la aplicación en **Python** [repositorio de GitHub de la primera idea en Python](https://github.com/RoberVF/AUTUMN_MAKEATHON_TURISMO), pero tras realizar algunas pruebas, nos dimos cuenta de que la Raspberry Pi (el dispositivo que íbamos a utilizar para ejecutar la aplicación) tenía recursos limitados para correr en local la IA utilizada. Por ello, decidimos cambiar a **Node.js**, corriendo el servidor en local y realizando peticiones a la API de **Hugging Face** para renderizar las respuestas en servidores externos.


## Tecnologías Utilizadas

### Frontend

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas. Utilizada para crear componentes reutilizables y gestionar el estado de la aplicación.
  
- **Vite**: Herramienta de desarrollo que permite un entorno de desarrollo rápido y optimizado para aplicaciones React. Facilita el desarrollo con recarga en caliente.

- **Lucide-React**: Librería de iconos SVG para React, utilizada para mejorar la interfaz de usuario con iconos atractivos.

### Backend

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor. Utilizado para crear un servidor que maneja las solicitudes de la aplicación.

- **Express**: Framework de Node.js que facilita la creación de aplicaciones web y APIs. Proporciona una estructura sencilla para manejar rutas y peticiones HTTP.

- **MongoDB**: Base de Datos no relacional o NoSQL. Actualmente no tiene utilidad alguna en el proyecto, pero esta configurada para futuras actualizaciones.

### Comunicación con la IA

- **HuggingFace API**: Utilizada para enviar preguntas de los usuarios y recibir respuestas generadas por inteligencia artificial. Permite ofrecer información útil y respuestas automáticas sobre el hotel. Actualmente, usando **GPT-Neo**

### Estilo y Diseño

- **Tailwind CSS**: Framework CSS para diseño de interfaces. Permite estilizar rápidamente componentes de la aplicación con clases utilitarias.

## Funcionalidades

- **Check-in**: Permite a los huéspedes realizar el check-in de forma rápida y sencilla o, en caso de no tener reserva, realizarla.

- **Información de la habitación**: Los usuarios pueden acceder a información útil sobre su habitación, incluyendo la ubicación y/o la forma para llegar a ella.

- **Preguntas a la IA**: Los huéspedes pueden hacer preguntas sobre el hotel y recibir respuestas generadas por inteligencia artificial en tiempo real.

## Instalación

Para usar este repositorio, tan solo tendremos que realizar una instalacion basica de un proyecto con MERN:
   ```bash
   git clone <url-del-repositorio>
   cd AUTUMN_MAKEATHON_TURISMO_WEB
   cd server
   npm i
   npm run dev
   ```
En otra terminal en la ruta / del proyecto:
  ```bash
  npm i
  npm run dev
  ```

La aplicacion tendra el servidor de nodejs corriendo en el puerto 3000, la base de datos en 27017 y el cliente en 5173.

## Contribuciones
Si deseas contribuir a este proyecto, por favor abre un issue o un pull request.

