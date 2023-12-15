import { Component, OnInit } from '@angular/core';
import {ProjetService} from "../../../services/projet-service";
import {Projet} from "../../../models/projet";
import Swal from "sweetalert2";

import { FormsModule } from "@angular/forms";
import {UserService} from "../../../services/user-service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-dashboar-maire',
  templateUrl: './dashboar-maire.component.html',
  styleUrls: ['./dashboar-maire.component.css']
})
export class DashboarMaireComponent implements OnInit{
constructor(
  private projetService:ProjetService,
  private userService: UserService
) {}
  projet = new Projet;
  user :User = new User;


  //declaration des tableaux
  tabProjet: Projet[] = [];
  tabUser: User [] = [];

    ngOnInit() {

      this.afficheProjets();
      this.afficherUser();
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

      //afficher annonce

      afficherUser(){
        this.userService.getAlls().subscribe(data =>{
          console.log(data);
          this.tabUser = data;
          console.log(this.tabUser);
        })
      }
ajouterUser(){

  if(!this.user.nom){
    this.verifierChamps("Impossible!", "Le nom est obligatoire", "Erreur")
  }
  else if(!this.user.prenom){
    this.verifierChamps("Impossible!", "Donnez une déscription", "Erreur")
  }
  else if(!this.user.telephone){
    this.verifierChamps("Impossible!", "Donnez le cout du projet", "Erreur")
  }
  else if(!this.user.email){
    this.verifierChamps("Impossible!", "Le délai est obligatoire", "Erreur")
  }

  else {
    let objetUser =new User ;
    // objetUser.nom =
    objetUser.nom= this.user.nom;
      objetUser.prenom= this.user.prenom;
      objetUser.username= this.user.username;
      objetUser.email= this.user.email;
      objetUser.telephone= this.user.telephone;
      objetUser.etat= true;
      objetUser.cni=26923696587;
      objetUser.sexe=" ";
      objetUser.createdAt= new Date();
      objetUser.createdBy= "gdgdggd";
      objetUser.updatedAt= new Date();
      objetUser.updatedBy= "gdgdgdg";
      objetUser.projets = [];
      objetUser.commentaires=[];

    this.userService.add(objetUser).subscribe(data =>{
      // @ts-ignore
      document.getElementById("close-btn").click();
      console.log(data);
      console.log("Ajouter")
      this.verifierChamps("Felicitation!", "Projet ajouté avec success", "success")
    })
  }
  this.afficherUser();

}

    }

