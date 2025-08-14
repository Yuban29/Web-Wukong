import { Component } from '@angular/core';
import { 
  IonTabs, IonTabBar, IonTabButton, 
  IonIcon, IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { walk, cloud, sparkles } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabBar, IonTabButton,
    IonIcon, IonLabel
  ]
})
export class TabsPage {
  constructor() {
    addIcons({ walk, cloud, sparkles }); // Iconos temáticos
  }
}
