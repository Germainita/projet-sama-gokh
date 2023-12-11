import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './composants/side-bar/side-bar.component';
import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';
import { AccueilComponent } from './composants/superAdmin/accueil/accueil.component';
import { UtilisateurComponent } from './composants/superAdmin/utilisateur/utilisateur.component';
import { ProjetComponent } from './composants/superAdmin/projet/projet.component';
import { AnnonceComponent } from './composants/superAdmin/annonce/annonce.component';
import { RolesComponent } from './composants/superAdmin/roles/roles.component';
import { VilleComponent } from './composants/superAdmin/ville/ville.component';
import { CommuneComponent } from './composants/superAdmin/commune/commune.component';
import { Routes } from '@angular/router';
import { GestionProjetComponent } from './composants/superAdmin/gestion-projet/gestion-projet.component';






@NgModule({
  
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    AccueilComponent,
    UtilisateurComponent,
    ProjetComponent,
    AnnonceComponent,
    RolesComponent,
    VilleComponent,
    CommuneComponent,
    GestionProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
