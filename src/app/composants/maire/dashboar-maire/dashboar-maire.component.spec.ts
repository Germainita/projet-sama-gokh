import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarMaireComponent } from './dashboar-maire.component';

describe('DashboarMaireComponent', () => {
  let component: DashboarMaireComponent;
  let fixture: ComponentFixture<DashboarMaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboarMaireComponent]
    });
    fixture = TestBed.createComponent(DashboarMaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
