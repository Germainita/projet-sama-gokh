import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProjetMunicipalComponent } from './gestion-projet-municipal.component';

describe('GestionProjetMunicipalComponent', () => {
  let component: GestionProjetMunicipalComponent;
  let fixture: ComponentFixture<GestionProjetMunicipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProjetMunicipalComponent]
    });
    fixture = TestBed.createComponent(GestionProjetMunicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
