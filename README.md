# 🐾 Veterinary Appointment Scheduler

**by ValkyrieX Company**

Este proyecto es una aplicación móvil desarrollada con **React Native** y el framework **Expo**, creada por **ValkyrieX Company**. La aplicación permite a usuarios y clínicas veterinarias **agendar, gestionar y visualizar citas médicas para mascotas** de manera sencilla, rápida y eficiente.

> 🚧 **Nota importante:** Se utiliza una **Development Build de Expo** debido a la integración de librerías externas que no están disponibles en Expo Go.

---

## 📱 Funcionalidades principales

* 📅 Agendamiento de citas veterinarias
* 🐶 Registro de mascotas (nombre, especie, raza, edad, etc.)
* 👨‍⚕️ Registro de dueños con datos de contacto
* ✏️ Edición y eliminación de citas
* ⏰ Recordatorios y alertas de citas *(si está implementado)*
* 💾 Almacenamiento local optimizado
* 🎨 Interfaz moderna, responsiva y centrada en el usuario

---

## 🚀 Tecnologías utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* **Expo Development Build** (mediante `eas build`)
* Algunas librerías utilizadas:

  * `react-native-paper` *(interfaz de usuario elegante y consistente)*
  * `@react-navigation/native` *(navegación entre pantallas)*
  * `react-native-calendars` *(visualización de citas en formato calendario)*
  * Y otras dependencias externas adaptadas para mobile

---

## 🔧 Instalación y ejecución

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/veterinary-scheduler.git
   cd veterinary-scheduler
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Instala EAS CLI si no lo tienes:**

   ```bash
   npm install -g eas-cli
   ```

4. **Crea tu Development Build:**

   ```bash
   eas build --profile development --platform android
   ```

5. **Escanea el código QR generado con tu app personalizada (no Expo Go):**
   Usa **Expo Dev Client** en tu dispositivo móvil.

---

## 📁 Estructura del proyecto (ejemplo)

```
/src
 ├── components      # Componentes reutilizables
 ├── screens         # Pantallas principales de la app
 ├── navigation      # Configuración de navegación
 ├── assets          # Imágenes, íconos, fuentes
 └── utils           # Funciones auxiliares y helpers
App.js               # Punto de entrada principal
```

---

## 🔮 Mejoras futuras

* Autenticación de usuarios
* Sincronización con base de datos en la nube
* Historial médico de cada mascota
* Notificaciones push
* Modo oscuro
* Traducción multilenguaje

---

## 🛡️ Licencia

Este proyecto fue desarrollado por **ValkyrieX Company** con fines académicos y de desarrollo profesional.
Todos los derechos reservados © 2025.
