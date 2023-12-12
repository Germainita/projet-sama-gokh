import { Component } from '@angular/core';
import {ProjetService} from "../../../services/projet-service";
import {AnnonceService} from "../../../services/annonce-service";
import {Projet} from "../../../models/projet";
import {Annonce} from "../../../models/annonce";
import Swal from "sweetalert2";

@Component({
  selector: 'app-gestion-annonces',
  templateUrl: './gestion-annonces.component.html',
  styleUrls: ['./gestion-annonces.component.css']
})
export class GestionAnnoncesComponent {
  constructor(
    private annonceService : AnnonceService
  ) {}
  annonce :Annonce = new Annonce;


  //declaration des tableaux
  tabAnnonce: Annonce [] = [];


  ngOnInit() {
    this.afficherAnnonce();
  }


  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }



  //afficher annonce

  afficherAnnonce(){
    this.annonceService.getAlls().subscribe(data =>{
      console.log(data);
      this.tabAnnonce = data;
      console.log(this.tabAnnonce);
    })
  }


}
