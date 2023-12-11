import { Component, OnInit } from '@angular/core';
import {ProjetService} from "../../services/projet-service";
import {Projet} from "../../models/projet";
import {Annonce} from "../../models/annonce";
import {AnnonceService} from "../../services/annonce-service";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  projet: Projet = new Projet(); // Créez une nouvelle instance de la classe Projet
  annonce:Annonce =new Annonce();

   tabProjet: Projet[] = [];
   annonces: Annonce[] = [];

  listProjet: boolean = false;
  listAnnonce:boolean = false;


  constructor(
    private projetService: ProjetService,
    private annonceService: AnnonceService
    ) {

  }

  afficherProjet() {
    // console.log(this.projet);
  }

  ngOnInit() {
    // Fonction pour récupérer tous les projets
    const getAllProjet = () => {
      this.listProjet = true;
      this.projetService.getAlls().subscribe((value: any) => {
        this.tabProjet = value;
        console.log(value);
        console.log(this.tabProjet); // Vous pouvez appeler afficherProjet() si nécessaire
      });
    };

    // Appel de la fonction pour récupérer tous les projets
    getAllProjet();
  }

  //lister annonces



}
