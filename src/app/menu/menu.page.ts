import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage {

  constructor() {}

  activarEmergencia() {
    console.log('Emergencia activada');
    
  }
}