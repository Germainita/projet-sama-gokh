import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';
import { VisiteurComponent } from './composants/visiteur/visiteur/visiteur.component';

const routes: Routes = [
  {path: "accueil", component:AccueilComponent},
  {path: "apropos", component: AproposComponent},
  {path: "projets", component: ProjetsComponent},
  {path: "mesprojets",component: MesProjetsComponent},
  {path: "annonces", component:AnnonceComponent},
  
  // Visiteur 
  {path: "visiteur", component:VisiteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
