import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user-service";
import {User} from "../../../models/user";
import {ProjetService} from "../../../services/projet-service";
import {Projet} from "../../../models/projet";
import Swal from "sweetalert2";

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit{
  user : User = new User;
  projet : Projet = new Projet;
  constructor(
    private projetService:ProjetService,
    private userService: UserService
  ) {}

  //declaration des tableaux
  tabProjet: Projet[] = [];
  tabUser: User [] = [];


  /**verifier champs*/
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  ngOnInit() {
  this.afficheProjets();
  this.afficherUser();
}


/**fonction afficher projet */
afficheProjets() {
  this.projetService.getAlls().subscribe(data => {
    console.log(data);
    this.tabProjet = data;
    console.log(this.tabProjet);

  });
}

/** afficher user */
afficherUser(){
  this.userService.getAlls().subscribe(data =>{
    console.log(data);
    this.tabUser = data;
    console.log(this.tabUser);
  })
}



}
