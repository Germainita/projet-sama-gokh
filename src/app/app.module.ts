import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './composants/side-bar/side-bar.component';
import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { GestionProjetMunicipalComponent } from './composants/adminCommune/gestion-projet-municipal/gestion-projet-municipal.component';
import { GestionAnnoncesComponent } from './composants/adminCommune/gestion-annonces/gestion-annonces.component';
import { DetailsAnnonceComponent } from './composants/adminCommune/details-annonce/details-annonce.component';

import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';
import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';
import { LoginComponent } from './composants/auth/login/login.component';
import { SignupComponent } from './composants/auth/signup/signup.component';
import { DashboarMaireComponent } from './composants/maire/dashboar-maire/dashboar-maire.component';
import { ProjetCommuneComponent } from './composants/adminCommune/projet-commune/projet-commune.component';
import { GestionAdminCommuneComponent } from './composants/maire/gestion-admin-commune/gestion-admin-commune.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,

    GestionProjetMunicipalComponent,
    GestionAnnoncesComponent,
    DetailsAnnonceComponent,

    AccueilComponent,
    ProjetsComponent,
    AproposComponent,
    MesProjetsComponent,
    AnnonceComponent,
    LoginComponent,
    SignupComponent,
    DashboarMaireComponent,
    ProjetCommuneComponent,
    GestionAdminCommuneComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
