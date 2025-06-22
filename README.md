# Formulario de Login Moderno con Validación

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)


![Preview del formulario](assets/images/previews/login-preview.jpg)

Un formulario de inicio de sesión moderno, responsive y con validación en tiempo real, construido con HTML, CSS y JavaScript.

## Características principales

- **Diseño moderno**: Efecto glassmorphism con fondo animado en gradiente
- **Validación en tiempo real**: Para email y contraseña
- **Interactividad**:
  - Toggle para mostrar/ocultar contraseña
  - Efectos hover y focus
  - Animaciones al mostrar errores
- **Responsive**: Se adapta perfectamente a móviles y tablets
- **Feedback visual**: Estados de error y éxito claramente diferenciados

## Validaciones implementadas

- Email válido (formato correcto)
- Contraseña con al menos 6 caracteres
- Campos requeridos
- Validación mientras el usuario escribe

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 moderno con variables, animaciones y efectos
- JavaScript vanilla (sin dependencias externas)

## Cómo usar

1. Clona este repositorio
2. Abre el archivo `index.html` en tu navegador
3. Prueba el formulario:
   - Ingresa un email inválido para ver el mensaje de error
   - Prueba contraseñas cortas
   - Usa el botón de ojo para mostrar/ocultar la contraseña

## Personalización

Puedes modificar fácilmente:
- Los colores en `:root` dentro de `assets/css/styles.css`
- Los mensajes de error en `assets/js/scripts.js`
- Las validaciones agregando nuevas reglas en JavaScript

## Vista previa

El formulario incluye:
- Campo para email con validación
- Campo para contraseña con toggle de visibilidad
- Botón de submit con estado de carga
- Enlace para registro (simulado)