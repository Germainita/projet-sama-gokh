import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SideBarComponent } from './composants/side-bar/side-bar.component';
// import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';

import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';
// import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { VisiteurComponent } from './composants/visiteur/visiteur/visiteur.component';
import { GestionProjetMunicipalComponent } from './composants/adminCommune/gestion-projet-municipal/gestion-projet-municipal.component';
import { GestionAnnoncesComponent } from './composants/adminCommune/gestion-annonces/gestion-annonces.component';
import { DetailsAnnonceComponent } from './composants/adminCommune/details-annonce/details-annonce.component';
import { FooterComponent } from './composants/citoyen/footer/footer.component';
import { ConditionComponent } from './composants/citoyen/condition/condition.component';
import { PolitiqueComponent } from './composants/citoyen/politique/politique.component';
import {ProjetCommuneComponent} from "./composants/adminCommune/projet-commune/projet-commune.component";
import { ListeAnnoncesComponent } from './composants/citoyen/liste-annonces/liste-annonces.component';
import { UtilisateurComponent } from './composants/superAdmin/utilisateur/utilisateur.component';
import { AnnonceComponent } from './composants/superAdmin/annonce/annonce.component';
import { ProjetComponent } from './composants/superAdmin/projet/projet.component';
import { RolesComponent } from './composants/superAdmin/roles/roles.component';
import { VilleComponent } from './composants/superAdmin/ville/ville.component';
import { CommuneComponent } from './composants/superAdmin/commune/commune.component';
import { GestionProjetComponent } from './composants/superAdmin/gestion-projet/gestion-projet.component';
import { SuperAdminAccueilComponent } from './composants/superAdmin/super-admin-accueil/super-admin-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    // SideBarComponent,
    // DashboardComponent,
    GestionProjetMunicipalComponent,
    GestionAnnoncesComponent,
    DetailsAnnonceComponent,
    AccueilComponent,
    ProjetsComponent,
    AproposComponent,
    MesProjetsComponent,
    // AnnonceComponent,
    VisiteurComponent,
    FooterComponent,
    MesProjetsComponent,
    ConditionComponent,
    PolitiqueComponent,
    AproposComponent,
    ProjetCommuneComponent,
    ListeAnnoncesComponent,
    UtilisateurComponent,
    ProjetComponent,
    AnnonceComponent,
    RolesComponent,
    VilleComponent,
    CommuneComponent,
    GestionProjetComponent,
    SuperAdminAccueilComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }