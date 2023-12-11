import { Component, OnInit   } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet-service';



@Component({
  selector: 'app-accueil-admin-commune',
  templateUrl: './accueil-admin-commune.component.html',
  styleUrls: ['./accueil-admin-commune.component.css']
})  
export class AccueilAdminCommuneComponent implements OnInit {
    projet: Projet = new Projet;

    projets : Projet[] =[];

    AfficherProjet(){
      console.log(this.projet);
      
    }

    listeProjet!: any;
    isProjet: boolean =false;

 
    constructor(private projetService:ProjetService){}
    ngOnInit(): void {
      
      // Get Liste
  const getAllProjet = () => {
    this.isProjet = true;
    this.projetService.getAlls().subscribe((data :any)=>{
        this.listeProjet = data;
        
    });
    console.log
  }

    }

}
