import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Visiteur 
import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
// import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';
import { ListeAnnoncesComponent } from './composants/citoyen/liste-annonces/liste-annonces.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';

// Admin maire et admin commune 
import { GestionAnnoncesComponent } from './composants/adminCommune/gestion-annonces/gestion-annonces.component';
import { GestionProjetMunicipalComponent } from './composants/adminCommune/gestion-projet-municipal/gestion-projet-municipal.component';
// import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';
import { DetailsAnnonceComponent } from './composants/adminCommune/details-annonce/details-annonce.component';
import { LoginComponent } from './composants/auth/login/login.component';
import { SignupComponent } from './composants/auth/signup/signup.component';
import {ProjetCommuneComponent} from "./composants/adminCommune/projet-commune/projet-commune.component";
import {DashboarMaireComponent} from "./composants/maire/dashboar-maire/dashboar-maire.component";
import {GestionAdminCommuneComponent} from "./composants/maire/gestion-admin-commune/gestion-admin-commune.component";
import { AccueilAdminCommuneComponent } from './composants/adminCommune/accueil-admin-commune/accueil-admin-commune.component';


// Visiteur
import { VisiteurComponent } from './composants/visiteur/visiteur/visiteur.component';


// Super admin 

import { UtilisateurComponent } from './composants/superAdmin/utilisateur/utilisateur.component';
import { AnnonceComponent } from './composants/superAdmin/annonce/annonce.component';
import { CommuneComponent } from './composants/superAdmin/commune/commune.component';
import { ProjetComponent } from './composants/superAdmin/projet/projet.component';
import { RolesComponent } from './composants/superAdmin/roles/roles.component';
import { VilleComponent } from './composants/superAdmin/ville/ville.component';
import { GestionProjetComponent } from './composants/superAdmin/gestion-projet/gestion-projet.component';
import { SuperAdminAccueilComponent } from './composants/superAdmin/super-admin-accueil/super-admin-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
// import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';


const routes: Routes = [
  {path: "accueil", component:AccueilComponent},
  {path: "apropos", component: AproposComponent},
  {path: "projets", component: ProjetsComponent},
  {path: "mesprojets",component: MesProjetsComponent},
  {path: "annonces", component:ListeAnnoncesComponent},
  
  {path: "gestionAnnonces", component:GestionAnnoncesComponent},
  {path:"projetMunicipal", component:GestionProjetMunicipalComponent  },
  {path:"commentaire", component:DetailsAnnonceComponent},
  {path:"connexion", component:AuthentificationComponent},
  {path:"inscription", component:SignupComponent},
  {path:"ProjetCommune ", component:ProjetCommuneComponent},
  {path:"acceuil-maire", component:DashboarMaireComponent},
  {path:"gestion-admin-commune", component:GestionAdminCommuneComponent},
  {path:"accueilAdmin", component:AccueilAdminCommuneComponent},
//   {path:"visiteur", component:VisiteurComponent},

  
  // Visiteur 
  {path: "visiteur", component:VisiteurComponent},

  // Super admin 
  {path: 'superAdmin', component:SuperAdminAccueilComponent},
  { path: 'utilisateur', component:UtilisateurComponent},
  { path: 'annonce', component:AnnonceComponent},
  { path: 'commune', component:CommuneComponent},
  { path: 'projet', component:ProjetComponent},
  { path: 'roles', component:RolesComponent},
  { path: 'ville', component:VilleComponent},
  { path: 'gestion-projet', component:GestionProjetComponent},

]

// const routes: Routes = [
//   // { path: 'dashboard', component: DashboardComponent }, // Route pour le tableau de bord
//   // { path: 'superAdmin', component: DashboardComponent}, // Route vers le  dashboard du  superAdmin
  
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}