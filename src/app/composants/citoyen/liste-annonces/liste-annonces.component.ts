import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { User } from 'src/app/models/user';
import { AnnonceService } from 'src/app/services/annonce-service';
import { ProjetService } from 'src/app/services/projet-service';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit{
  isAnnonces: boolean = true;

  userConnect = new User;

  tabAnnonces: Annonce[]  = [];
  tabAnnoncesPub: Annonce[]  = [];

  annonceObjet = new Annonce;

  // Attribut pour la pagination
  annoncesParPage = 6; // Nombre d'annonces par page
  pageActuelle = 1; // Page actuelle

  // Appel du constructur 
  constructor( 
    private annonce:AnnonceService, 
    private user: UserService, 
    private router: Router
  ){}
  
  ngOnInit() {
    this.listeAnnonces();
  }

  // liste des annonces 
  listeAnnonces(){
    this.annonce.getAlls().subscribe(data =>{
      this.tabAnnonces = data;
      console.log(this.tabAnnonces);
    })
  }

  // Voir les commentaires d'une annonce 
  showCommentaires(){
    this.isAnnonces = !this.isAnnonces
  }

  // annonce = new Annonce
  infosCommentaire(annonce:any){

  }

  // Pagination 
  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getAnnoncesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.annoncesParPage;
    const indexFin = indexDebut + this.annoncesParPage;
    return this.tabAnnonces.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.tabAnnonces.length / this.annoncesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }
  
  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.tabAnnonces.length / this.annoncesParPage);
  }
}
