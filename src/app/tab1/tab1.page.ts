import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonButton, IonIcon,
  IonSpinner, NavController  // ¡Añade NavController aquí!
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardCircle } from 'ionicons/icons';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonButton, IonIcon,
    IonSpinner
  ]
})
export class Tab1Page {
  wukongImageUrl = 'https://s2.dmcdn.net/v/WtkQC1cnF_hRCJbbm/x480';
  imageLoaded = false;

  // Inyecta NavController en el constructor (¡elimina las líneas de navCtrl y router!)
  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController  // ¡Así es correcto!
  ) {
    addIcons({ arrowForwardCircle });
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  async handleImageError() {
    this.imageLoaded = false;
    const toast = await this.toastCtrl.create({
      message: 'Error cargando la imagen',
      duration: 2000,
      color: 'warning',
      position: 'top'
    });
    await toast.present();
  }

  // Navegación corregida
  goToTab2() {
    this.navCtrl.navigateForward('/tabs/tab2'); 
    // Alternativa: this.navCtrl.navigateRoot('/tabs/tab2');
  }
}