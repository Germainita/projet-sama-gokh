import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './composants/superAdmin/utilisateur/utilisateur.component';
import { AnnonceComponent } from './composants/superAdmin/annonce/annonce.component';
import { CommuneComponent } from './composants/superAdmin/commune/commune.component';
import { ProjetComponent } from './composants/superAdmin/projet/projet.component';
import { RolesComponent } from './composants/superAdmin/roles/roles.component';
import { VilleComponent } from './composants/superAdmin/ville/ville.component';
import { GestionProjetComponent } from './composants/superAdmin/gestion-projet/gestion-projet.component';
import { SuperAdminAccueilComponent } from './composants/superAdmin/super-admin-accueil/super-admin-accueil.component';
// import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent }, // Route pour le tableau de bord
  // { path: 'superAdmin', component: DashboardComponent}, // Route vers le  dashboard du  superAdmin
  {path: 'superAdmin', component:SuperAdminAccueilComponent},
  { path: 'utilisateur', component:UtilisateurComponent},
  { path: 'annonce', component:AnnonceComponent},
  { path: 'commune', component:CommuneComponent},
  { path: 'projet', component:ProjetComponent},
  { path: 'roles', component:RolesComponent},
  { path: 'ville', component:VilleComponent},
  { path: 'gestion-projet', component:GestionProjetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
