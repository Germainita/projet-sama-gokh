import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './composants/side-bar/side-bar.component';
import { DashboardComponent } from './composants/adminCommune/dashboard/dashboard.component';
import { GestionProjetMunicipalComponent } from './composants/adminCommune/gestion-projet-municipal/gestion-projet-municipal.component';
import { GestionAnnoncesComponent } from './composants/adminCommune/gestion-annonces/gestion-annonces.component';
import { DetailsAnnonceComponent } from './composants/adminCommune/details-annonce/details-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    GestionProjetMunicipalComponent,
    GestionAnnoncesComponent,
    DetailsAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
