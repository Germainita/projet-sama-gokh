import { Component, OnInit } from '@angular/core';
import { EtatProjetService } from 'src/app/services/etatProjet-service';
import { TypeProjetService } from 'src/app/services/typeProjet-service';


@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {
  
  etatProjets: any[] = []; // Remplacez any[] par le type de vos données d'état de projet
  typeProjets: any[] = []; // Remplacez any[] par le type de vos données de type de projet
  
  constructor(
    private etatProjetService: EtatProjetService,
    private typeProjetService: TypeProjetService
  ) {};
  
  ngOnInit(): void {
    // Récupération des états de projets
    this.etatProjetService.getAlls().subscribe((data: any[]) => {
      this.etatProjets = data;
    });

    // Récupération des types de projets
    this.typeProjetService.getAlls().subscribe((data: any[]) => {
      this.typeProjets = data;
    });
  }
}
