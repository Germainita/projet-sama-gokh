import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProjetCitoyenComponent } from './gestion-projet-citoyen.component';

describe('GestionProjetCitoyenComponent', () => {
  let component: GestionProjetCitoyenComponent;
  let fixture: ComponentFixture<GestionProjetCitoyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProjetCitoyenComponent]
    });
    fixture = TestBed.createComponent(GestionProjetCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
