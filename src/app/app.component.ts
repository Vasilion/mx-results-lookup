import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mx-results-lookup';
  constructor(private menu: MenuController) {

  }

  closeMenu(){
    this.menu.close()
  }
}
