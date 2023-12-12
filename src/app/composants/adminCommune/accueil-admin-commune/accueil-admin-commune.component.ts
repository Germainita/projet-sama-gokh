import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet-service';
import Swal from 'sweetalert2';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-accueil-admin-commune',
  templateUrl: './accueil-admin-commune.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./accueil-admin-commune.component.css']
})
export class AccueilAdminCommuneComponent implements OnInit {
  projet = new Projet;
  tabProjet: Projet[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.afficheProjets();
  }

  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  afficheProjets() {
    this.projetService.getAlls().subscribe(data => {
      console.log(data);
      this.tabProjet = data;
      console.log(this.tabProjet);
    });
  }

  // ...

  ajouterProjet() {
    // // Créez un nouvel objet Projet avec des valeurs initiales (à personnaliser)
    // const nouveauProjet: { titre: string; description: string } = {
    //   titre: "Nouveau Projet",
    //   description: "Description du nouveau projet",
    //   // Ajoutez d'autres propriétés si nécessaires
    // };
    //
    // // Utilisez le service pour ajouter le projet
    // this.projetService.add(nouveauProjet).subscribe(value => nouveauProjet ){}


}
}
