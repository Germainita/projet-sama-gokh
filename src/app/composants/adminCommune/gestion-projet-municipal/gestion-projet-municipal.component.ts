import { Component } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet-service';
import Swal from 'sweetalert2';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {AnnonceService} from "../../../services/annonce-service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-gestion-projet-municipal',
  templateUrl: './gestion-projet-municipal.component.html',
  styleUrls: ['./gestion-projet-municipal.component.css']
})
export class GestionProjetMunicipalComponent {

  projet = new Projet;

  // Attribut pour la pagination
  articlesParPage = 5; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle


// Pagination
  // Méthode pour déterminer les articles à afficher sur la page actuelle
  // @ts-ignore
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
  }





    tabProjet: Projet[] = [];
  itemsPerPage = 5;
  currentPage = 1;

  constructor(
    private projetService: ProjetService,
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
        // @ts-ignore
        document.getElementById("close-btn").click();
        console.log(data);
        console.log("Ajouter")
        this.verifierChamps("Felicitation!", "Projet ajouté avec success", "success")
      })
    }

    this.afficheProjets();

  }

  // editProjet(id: number) {
  //   const projetToEdit = this.tabProjet.find(projet => projet.id === id);
  //
  //   if (!projetToEdit) {
  //     // Gérer l'erreur si le projet n'est pas trouvé
  //     console.error("Projet non trouvé");
  //     return;
  //   }
  //
  //   // Vous pouvez afficher un formulaire de modification ou utiliser Swal pour obtenir les nouvelles informations
  //
  //   // Dans cet exemple, nous modifions uniquement la description à des fins de démonstration
  //   projetToEdit.description = "Nouvelle description";
  //
  //   // Ensuite, nous appelons la fonction de modification du service
  //   this.projetService.edit(id, projetToEdit).subscribe(() => {
  //     this.afficheProjets(); // Rafraîchir la liste des projets après la modification
  //     console.log("Projet modifié avec succès");
  //   });
  // }



}
