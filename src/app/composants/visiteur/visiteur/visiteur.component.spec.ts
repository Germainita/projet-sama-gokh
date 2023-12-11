import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteurComponent } from './visiteur.component';

describe('VisiteurComponent', () => {
  let component: VisiteurComponent;
  let fixture: ComponentFixture<VisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteurComponent]
    });
    fixture = TestBed.createComponent(VisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
