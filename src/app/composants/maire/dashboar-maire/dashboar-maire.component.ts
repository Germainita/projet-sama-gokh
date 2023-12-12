import { Component, OnInit } from '@angular/core';
import {ProjetService} from "../../../services/projet-service";
import {Projet} from "../../../models/projet";
import Swal from "sweetalert2";
import {Annonce} from "../../../models/annonce";

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


    }

