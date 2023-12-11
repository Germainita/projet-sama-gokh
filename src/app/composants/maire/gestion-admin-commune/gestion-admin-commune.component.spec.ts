import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminCommuneComponent } from './gestion-admin-commune.component';

describe('GestionAdminCommuneComponent', () => {
  let component: GestionAdminCommuneComponent;
  let fixture: ComponentFixture<GestionAdminCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAdminCommuneComponent]
    });
    fixture = TestBed.createComponent(GestionAdminCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
