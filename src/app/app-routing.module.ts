import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';
import { GestionAnnoncesComponent } from './composants/adminCommune/gestion-annonces/gestion-annonces.component';
import { GestionProjetMunicipalComponent } from './composants/adminCommune/gestion-projet-municipal/gestion-projet-municipal.component';
import { DetailsAnnonceComponent } from './composants/adminCommune/details-annonce/details-annonce.component';
import { LoginComponent } from './composants/auth/login/login.component';
import { SignupComponent } from './composants/auth/signup/signup.component';
import {ProjetCommuneComponent} from "./composants/adminCommune/projet-commune/projet-commune.component";
import {DashboarMaireComponent} from "./composants/maire/dashboar-maire/dashboar-maire.component";
import {GestionAdminCommuneComponent} from "./composants/maire/gestion-admin-commune/gestion-admin-commune.component";
import { AccueilAdminCommuneComponent } from './composants/adminCommune/accueil-admin-commune/accueil-admin-commune.component';
import { VisiteurComponent } from './composants/visiteur/visiteur/visiteur.component';

const routes: Routes = [
  {path: "accueil", component:AccueilComponent},
  {path: "apropos", component: AproposComponent},
  {path: "projets", component: ProjetsComponent},
  {path: "mesprojets",component: MesProjetsComponent},
  {path: "annonces", component:AnnonceComponent},
  {path: "gestionAnnonces", component:GestionAnnoncesComponent},
  {path:"projetMunicipal", component:GestionProjetMunicipalComponent  },
  {path:"commentaire", component:DetailsAnnonceComponent},
  {path:"connexion", component:LoginComponent},
  {path:"inscription", component:SignupComponent},
  {path:"ProjetCommune ", component:ProjetCommuneComponent},
  {path:"acceuil-maire", component:DashboarMaireComponent},
  {path:"gestion-admin-commune", component:GestionAdminCommuneComponent},
  {path:"accueilAdmin", component:AccueilAdminCommuneComponent},
  {path: "visiteur", component:VisiteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
