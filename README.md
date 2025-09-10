# 🐉 Wukong App
### *"El poder del Rey Mono en tus manos"* 🐒✨

<div align="center">

![Wukong App Banner](https://estudiosdechino.com/wp-content/uploads/2024/08/2-3.jpg)

**Aplicación móvil épica inspirada en la leyenda de Sun Wukong**

<p>
  <img src="https://img.shields.io/badge/Ionic-7.2.0-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic">
  <img src="https://img.shields.io/badge/Angular-16.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.1.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Capacitor-5.0.0-119EFF?style=for-the-badge&logo=capacitor&logoColor=white" alt="Capacitor">
</p>

[![MIT License](https://img.shields.io/badge/License-MIT-gold.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub stars](https://img.shields.io/github/stars/yuban-hilarion/wukong-app.svg?style=social&label=Star)](https://github.com/yuban-hilarion/wukong-app)

[📱 Demo en Vivo](https://wukong-app.demo.com) • [🐛 Reportar Bug](https://github.com/yuban-hilarion/wukong-app/issues) • [✨ Solicitar Feature](https://github.com/yuban-hilarion/wukong-app/issues)

</div>

---

## 📖 Sobre el Proyecto

**Wukong App** es una aplicación móvil desarrollada con **Ionic + Angular** que rinde homenaje al legendario Sun Wukong, el Rey Mono de la mitología china. Con un diseño épico en negro, dorado y blanco, esta app combina la magia ancestral con tecnología moderna.

### ✨ Características Místico-Digitales

- **🏮 Inicio (El Bastón Ruyi)** - Página principal con navegación fluida
- **✉️ Contacto (La Nube Sagrada)** - Formularios con validación "Ojo de Sabiduría"  
- **📜 Acerca de (La Corona Dorada)** - Información del proyecto
- **🎨 Diseño épico** en paleta dorado/negro/blanco
- **⚡ Efectos visuales** dignos del Gran Sabio
- **📱 100% Responsive** - Funciona en iOS, Android y web

## 📸 Screenshots

<div align="center">

### 🖥️ Vista de Escritorio
<img width="1876" height="928" alt="image" src="https://github.com/user-attachments/assets/5ea38370-c615-4962-a87a-0fcbc5b5c2f2" />


### 📱 Vista Móvil
<img width="523" height="848" alt="image" src="https://github.com/user-attachments/assets/30f31622-d558-44ab-a38f-9dec4ddb20f8" />


</div>

## 🚀 Instalación y Configuración

### 📋 Requisitos Previos

Asegúrate de tener instalado:
- **Node.js v18+** ([Descargar aquí](https://nodejs.org/))
- **npm v9+** (incluido con Node.js)
- **Ionic CLI**: `npm install -g @ionic/cli`

### ⚡ Instalación Rápida

```bash
# 1. 🌟 Clonar el monasterio de código
git clone https://github.com/yuban-hilarion/wukong-app.git
cd wukong-app

# 2. 🌿 Recoger las hierbas mágicas (dependencias)
npm install

# 3. 🚀 Invocar la aplicación
ionic serve
```

**¡Listo!** Abre tu navegador en: [http://localhost:8100](http://localhost:8100)

### 📱 Build para Dispositivos

#### 🤖 Android
```bash
ionic capacitor add android
ionic capacitor copy android
ionic capacitor open android
```

#### 🍏 iOS (requiere Mac)
```bash
ionic capacitor add ios
ionic capacitor copy ios
ionic capacitor open ios
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── tabs/                # 🌀 Navegación entre reinos
│   ├── tab1/                # 🏮 Inicio (El Bastón)
│   │   ├── tab1.page.html
│   │   ├── tab1.page.scss
│   │   └── tab1.page.ts
│   ├── tab2/                # ☁️ Contacto (La Nube)
│   │   ├── tab2.page.html
│   │   ├── tab2.page.scss
│   │   └── tab2.page.ts
│   └── tab3/                # 👑 Acerca de (La Corona)
│       ├── tab3.page.html
│       ├── tab3.page.scss
│       └── tab3.page.ts
├── assets/
│   └── wukong/              # 🖼️ Imágenes sagradas
└── theme/
    └── variables.scss       # 🎨 Estilos celestiales
```

## 💻 Ejemplos de Código

### Navegación entre Tabs
```typescript
// tab1.page.ts
import { NavController } from '@ionic/angular';

export class Tab1Page {
  constructor(private navCtrl: NavController) {}
  
  goToTab2() {
    this.navCtrl.navigateForward('/tabs/tab2'); 
  }
}
```

### Estilos Temáticos
```scss
// variables.scss - Paleta de colores de Wukong
:root {
  --wukong-gold: #FFD700;    // Oro del cinturón sagrado
  --wukong-dark: #121212;    // Noche del cielo celestial
  --wukong-white: #FFFFFF;   // Nubes del paraíso
  
  --ion-color-primary: var(--wukong-gold);
  --ion-background-color: var(--wukong-dark);
}
```

## 📝 Scripts Disponibles

```bash
ionic serve              # 🚀 Servidor de desarrollo
ionic build              # 🏗️ Build para producción  
ionic capacitor run ios  # 🍏 Ejecutar en iOS
ionic capacitor run android # 🤖 Ejecutar en Android
npm run lint             # 🔍 Verificar código
npm run test             # 🧪 Ejecutar pruebas
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Aquí puedes ayudar:

1. **Fork** el proyecto
2. **Crea** tu rama feature (`git checkout -b feature/NuevaCaracteristica`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva característica épica'`)
4. **Push** a la rama (`git push origin feature/NuevaCaracteristica`)
5. **Abre** un Pull Request

### 📋 Guías de Contribución

- Mantén el estilo de código existente
- Sigue la temática de Wukong en nombres y comentarios
- Actualiza la documentación si es necesario
- Prueba en dispositivos móviles

## 🌟 Roadmap

- [ ] 🎮 Minijuegos del Rey Mono
- [ ] 🌐 Internacionalización (ES/EN/CN)
- [ ] 🔊 Efectos de sonido temáticos
- [ ] 📊 Analytics y métricas
- [ ] 🎨 Temas alternativos

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** © 2024 Yuban Hilarion

*"Permite uso comercial, modificaciones y distribución. Solo requiere atribución."*

Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos y Agradecimientos

- **Inspiración**: Leyenda de Sun Wukong - El Rey Mono 🐒
- **Mitología**: "Viaje al Oeste" (西游记)
- **Iconografía**: Elementos tradicionales chinos

## 👨‍💻 Autor

**Yuban Hilarion**

- GitHub: [@yuban-hilarion](https://github.com/yuban-hilarion)

---

<div align="center">

**Desarrollado con 💙 por Yuban Hilarion**

*"Que el poder del Rey Mono guíe tu código"* 🐉✨

</div>
