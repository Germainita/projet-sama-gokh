import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAdminCommuneComponent } from './accueil-admin-commune.component';

describe('AccueilAdminCommuneComponent', () => {
  let component: AccueilAdminCommuneComponent;
  let fixture: ComponentFixture<AccueilAdminCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilAdminCommuneComponent]
    });
    fixture = TestBed.createComponent(AccueilAdminCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
