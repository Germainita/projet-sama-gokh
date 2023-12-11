import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './composants/side-bar/side-bar.component';
import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';
import { AccueilComponent } from './composants/citoyen/accueil/accueil.component';
import { ProjetsComponent } from './composants/citoyen/projets/projets.component';
import { AproposComponent } from './composants/citoyen/apropos/apropos.component';
import { MesProjetsComponent } from './composants/citoyen/mes-projets/mes-projets.component';
import { AnnonceComponent } from './composants/citoyen/annonce/annonce.component';
import { FooterComponent } from './composants/citoyen/footer/footer.component';
import { VisiteurComponent } from './composants/visiteur/visiteur/visiteur.component';
import { PolitiqueComponent } from './composants/citoyen/politique/politique.component';
import { ConditionComponent } from './composants/citoyen/condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    AccueilComponent,
    ProjetsComponent,
    AproposComponent,
    MesProjetsComponent,
    AnnonceComponent,
    FooterComponent,
    VisiteurComponent,
    PolitiqueComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
