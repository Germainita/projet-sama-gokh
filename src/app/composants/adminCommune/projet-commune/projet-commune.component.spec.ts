import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCommuneComponent } from './projet-commune.component';

describe('ProjetCommuneComponent', () => {
  let component: ProjetCommuneComponent;
  let fixture: ComponentFixture<ProjetCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetCommuneComponent]
    });
    fixture = TestBed.createComponent(ProjetCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
