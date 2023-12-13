import { Component, OnInit } from '@angular/core';
import {ProjetService} from "../../../services/projet-service";
import {Projet} from "../../../models/projet";
import Swal from "sweetalert2";

@Component({
  selector: 'app-gestion-projet-citoyen',
  templateUrl: './gestion-projet-citoyen.component.html',
  styleUrls: ['./gestion-projet-citoyen.component.css']
})
export class GestionProjetCitoyenComponent implements OnInit{
  projet = new Projet;

  /**constructeur pour les services */
  constructor(
    private projetService : ProjetService
  ) {
  }

  tabProjet: Projet[] = [];

  ngOnInit(): void {
    this.afficheProjets();
  }

  /**verifier les champs*/
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



}
