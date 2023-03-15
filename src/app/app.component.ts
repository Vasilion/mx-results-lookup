import { Component } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { DisableBackService } from './services/disable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mx-results-lookup';
  constructor(private menu: MenuController, private disableService: DisableBackService) {

  }
  ngOnInit(): void{
    this.disableService.disableBack();
  }

  closeMenu(){
    this.menu.close()
  }
}
