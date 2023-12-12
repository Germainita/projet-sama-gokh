import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/composants/superAdmin/accueil/accueil.component.spec.ts
import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent]
    });
    fixture = TestBed.createComponent(AccueilComponent);
========
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
>>>>>>>> a09f949d8a205cc70b3405bd03072a6fbccfe5c8:src/app/composants/auth/login/login.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
