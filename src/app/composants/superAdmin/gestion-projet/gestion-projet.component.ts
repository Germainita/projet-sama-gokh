import { Component, OnInit } from '@angular/core';
import { EtatProjetService } from 'src/app/services/etatProjet-service';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {
  
  etatProjets: any[] = []; // Remplacez any[] par le type de vos données d'état de projet
  typeProjets: any[] = []; // Remplacez any[] par le type de vos données de type de projet
  
  constructor(private etatProjetService: EtatProjetService) {};
  
  ngOnInit(): void {
    
  }
}
