📜 Wukong App - README
¡Una aplicación épica inspirada en el Rey Mono! 🐒✨

🚀 Descripción
Aplicación móvil desarrollada con Ionic + Angular que muestra:

Inicio: Imagen centrada de Wukong y botón de navegación.

Contacto: Formulario funcional con validaciones.

Acerca de: Créditos del desarrollador.

🛠 Tecnologías Usadas
Tecnología	Versión	Uso
Ionic	7.2.0	Framework UI móvil
Angular	16.2.0	Estructura y lógica
TypeScript	5.1.3	Tipado estático
Capacitor	5.0.0	Build nativo (opcional)
⚡ Instalación
1. Requisitos Previos
Node.js v18+ (Descargar)

npm v9+ (viene con Node.js)

Ionic CLI:

bash
npm install -g @ionic/cli  
2. Clonar el Proyecto
bash
git clone https://github.com/tu-usuario/wukong-app.git  
cd wukong-app  
3. Instalar Dependencias
bash
npm install  
4. Ejecutar en el Navegador
bash
ionic serve  
Abre en: http://localhost:8100

📱 Build para Dispositivos
Android
bash
ionic capacitor add android  
ionic capacitor copy android  
ionic capacitor open android  
iOS
bash
ionic capacitor add ios  
ionic capacitor copy ios  
ionic capacitor open ios  
🎨 Estructura del Proyecto
text
src/  
├── app/  
│   ├── tabs/                # Navegación inferior  
│   ├── tab1/                # Página de inicio  
│   ├── tab2/                # Formulario de contacto  
│   └── tab3/                # Acerca de  
├── assets/                  # Imágenes/fuentes  
└── theme/                   # Variables de estilo  
💡 Documentación del Código
Navegación entre Tabs
typescript
// tab1.page.ts  
goToTab2() {  
  this.navCtrl.navigateForward('/tabs/tab2');  
}  
Validación de Formulario
html
<!-- tab2.page.html -->  
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">  
  <ion-input name="email" ngModel required></ion-input>  
</form>  
Estilos Globales
scss
// global.scss  
:root {  
  --wukong-gold: #FFD700;  
  --dark-bg: #121212;  
}  
🌟 Características Destacadas
Diseño responsive para móviles y web.

Animaciones CSS personalizadas.

Theming con variables de Ionic.

100% funcional en iOS/Android.


🙌 Créditos
Desarrollado con  por Yuban Hilarion
