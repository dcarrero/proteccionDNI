# ID: Protección DNI / ID Protection

Aplicación web para proteger documentos de identidad antes de compartirlos. Oculta datos privados y añade marcas de agua personalizadas siguiendo las recomendaciones de seguridad oficiales.

Web application to protect ID documents before sharing. Hides private data and adds custom watermarks following official security recommendations.

## Características / Features

- **Multiidioma / Multilingual**: 9 idiomas soportados (ES, CA, GL, EU, EN, FR, IT, PT, DE)
- **Tema claro/oscuro / Light/dark theme**: Toggle manual + modo automático del sistema
- **Documentos internacionales / International documents**: DNI España, CIE Italia, CNI Francia, Personalausweis Alemania, CC Portugal, Permisos UE
- **100% offline**: Funciona sin conexión a internet (PWA ready)
- **Privacidad total / Full privacy**: Todo el procesamiento se hace en el navegador, sin envío de datos
- **Responsive**: Optimizado para desktop y móvil

## Funcionalidades / Functionality

1. Conversión automática a blanco y negro
2. Ocultación de datos sensibles según el tipo de documento
3. Marca de agua personalizable
4. Ajuste de posición, zoom y rotación
5. Descarga directa o compartir con apps

## Tecnología / Technology

- JavaScript vanilla (sin frameworks)
- CSS con variables y `light-dark()` para temas
- Web Workers para procesamiento de imagen
- LocalStorage para preferencias
- PWA con Service Worker

## Instalación / Installation

1. Descarga los archivos
2. Abre `index.html` en tu navegador
3. (Opcional) Para uso local sin servidor, elimina la etiqueta `<meta id="MetaCSP"...>` del HTML

## Estructura de archivos / File structure

```
├── index.html          # Página principal (español)
├── estilos.css         # Estilos con soporte de temas
├── codigo.js           # Lógica principal
├── formatos.js         # Definiciones de formatos de ID
├── i18n.js             # Sistema de internacionalización
├── theme.js            # Gestión de temas
├── worker.js           # Web Worker para procesamiento
├── manifest.webmanifest # Configuración PWA
└── README.md
```

## Créditos / Credits

- **Proyecto original / Original project**: [AlfonsoML/proteccionDNI](https://github.com/AlfonsoML/proteccionDNI)
- **Mejoras y extensiones / Improvements and extensions**: [David Carrero Fernandez-Baillo](https://carrero.es) - [GitHub](https://github.com/dcarrero/proteccionDNI)
  - Sistema multiidioma (9 idiomas)
  - Toggle de tema claro/oscuro
  - Soporte para documentos internacionales
  - Mejoras visuales y responsive
  - Optimizaciones de accesibilidad

## Licencia / License

Este proyecto es de código abierto. Ver el repositorio original para detalles de licencia.

This project is open source. See the original repository for license details.

---

Icono de máscara creado por [Andrew Nenakhov](https://pictogrammers.com/library/mdi/icon/domino-mask/).
Icono candado para Web App por [Dios Campechano](https://mastodon.social/@Dios_Campechano@tkz.one/114094705033755223).
