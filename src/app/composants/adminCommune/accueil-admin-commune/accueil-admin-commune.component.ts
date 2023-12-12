import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet-service';
import Swal from 'sweetalert2';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {AnnonceService} from "../../../services/annonce-service";
import { Annonce } from 'src/app/models/annonce';
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-accueil-admin-commune',
  templateUrl: './accueil-admin-commune.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgOptimizedImage,
    RouterLink
  ],
  styleUrls: ['./accueil-admin-commune.component.css']
})
export class AccueilAdminCommuneComponent implements OnInit {
  projet = new Projet;
  annonce : Annonce = new Annonce;


  tabProjet: Projet[] = [];
  tabAnnonce : Annonce[] = [];

  constructor(
    private projetService: ProjetService,
    private annonceService: AnnonceService
  ) { }

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

  afficheAnnonce() {
    this.projetService.getAlls().subscribe(data => {
      console.log(data);
      this.tabProjet = data;
      console.log(this.tabProjet);


    });
    // this.ajouterProjet();
  }

  // ...


  // Methode pour soumettre un projet
  ajouterProjet(){
    console.log(typeof(this.projet.delai))
    let delai = new Date(this.projet.delai)
    console.log(typeof(delai));
    // console.log(this.projet)
    // On vérifie s les informations ne sont pas vides
    if(!this.projet.titre){
      this.verifierChamps("Impossible!", "Le titre est obligatoire", "Erreur")
    }
    else if(!this.projet.description){
      this.verifierChamps("Impossible!", "Donnez une déscription", "Erreur")
    }
    else if(!this.projet.image){
      this.verifierChamps("Impossible!", "Donnez une déscription", "Erreur")
    }
    else if(!this.projet.cout){
      this.verifierChamps("Impossible!", "Donnez le cout du projet", "Erreur")
    }
    else if(!this.projet.delai){
      this.verifierChamps("Impossible!", "Le délai est obligatoire", "Erreur")
    }

    else {
      let objetTest = {
        titre: this.projet.titre,
        description: this.projet.description,
        image: this.projet.image,
        cout: this.projet.cout,
        delai: new Date(this.projet.delai),
        etat: true,
        idEtatProjet: 1,
        idTypeProjet: 1,
        idUser: 1,
        createdAt: new Date(),
        createdBy: "gdgdggd",
        updatedAt: new Date(),
        updatedBy: "gdgdgdg"
      }

      this.projetService.add(objetTest).subscribe(data =>{
        console.log(data);
        console.log("Ajouter")
        this.verifierChamps("Felicitation!", "Projet ajouté avec success", "success")
      })
    }

    this.afficheProjets();

  }

}
