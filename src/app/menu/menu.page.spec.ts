import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MenuPage } from './menu.page'; // Cambiado de Tab1Page a MenuPage

describe('MenuPage', () => {
  let component: MenuPage; // Cambiado el tipo de componente a MenuPage
  let fixture: ComponentFixture<MenuPage>; // Cambiado el tipo de fixture a ComponentFixture<MenuPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuPage], // Cambiado de Tab1Page a MenuPage
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage); // Cambiado de Tab1Page a MenuPage
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
