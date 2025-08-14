import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonTextarea,
  IonButton, IonIcon, IonBackButton, IonButtons,
  NavController, ToastController, IonCardSubtitle } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { send, arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, 
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonTextarea,
    IonButton, IonIcon, IonBackButton, IonButtons
  ]
})
export class Tab2Page {
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    addIcons({ send, arrowBack });
  }

  async onSubmit(form: any) {
    if (form.valid) {
      const toast = await this.toastCtrl.create({
        message: 'Mensaje enviado con éxito',
        duration: 2000,
        color: 'medium',
        position: 'top'
      });
      await toast.present();
      
      // Navega a tab3 después de enviar
      setTimeout(() => {
        this.navCtrl.navigateRoot('/tabs/tab3');
      }, 1000);
    }
  }
}