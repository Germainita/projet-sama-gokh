import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminAccueilComponent } from './super-admin-accueil.component';

describe('SuperAdminAccueilComponent', () => {
  let component: SuperAdminAccueilComponent;
  let fixture: ComponentFixture<SuperAdminAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminAccueilComponent]
    });
    fixture = TestBed.createComponent(SuperAdminAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
