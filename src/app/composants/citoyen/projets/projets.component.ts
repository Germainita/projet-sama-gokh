import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { EtatProjet } from 'src/app/models/etatProjet';
import { Projet } from 'src/app/models/projet';
import { TypeProjet } from 'src/app/models/typeProjet';
import { User } from 'src/app/models/user';
import { Vote } from 'src/app/models/vote';
import { AnnonceService } from 'src/app/services/annonce-service';
import { EtatProjetService } from 'src/app/services/etatProjet-service';
import { ProjetService } from 'src/app/services/projet-service';
import { TypeProjetService } from 'src/app/services/typeProjet-service';
import { UserService } from 'src/app/services/user-service';
import { VoteService } from 'src/app/services/vote-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  // Déclartion des attributs
  isMunicipal:boolean = true
  isCitoyen:boolean = true
  isEncours:boolean = true
  isVote:boolean = false
  isValider:boolean = false
  isInvalider:boolean = false

  inputSerach!: string;

  // Attribut pour la pagination dans .ts
  mesProjet = 6; // Nombre d'annonces par page
  pageActuelle = 1; // Page actuelle

  projet = new Projet;

  tabProjet: Projet[]  = [];
  tabProjetUser: Projet[]  = [];
  tabProjetMunicipal: Projet[]  = [];
  tabProjetCitoyen: Projet[]  = [];
  tabProjetFiltered: Projet[]  = [];

  tabUsers: User[] = [];

  userConnect = new User;

  tabEtatProjet: EtatProjet[] = [];

  tabTypeProjet: TypeProjet[] = [];


  idEtatEncours: number = 0;  
  idEtatTermine: number = 0;
  idEtatValide: number = 0;
  idEtatInvalide: number = 0;

  // Projets citoyens
  idCitoyen: number = 0;

  idMunicipal: number = 0;

  // Pour les votes 
  tabVotes: Vote [] = [];
  tabVotesProjet : Vote [] = [];

  voteChoice = new Vote;

  // Déclaration des méthodes

  // Appel du constructur 
  constructor(
    private projetService: ProjetService, 
    private annonce:AnnonceService, 
    private user: UserService, 
    private router: Router,
    private etatProjet: EtatProjetService,
    private typeProjet: TypeProjetService,
    private vote: VoteService
  ){}

  ngOnInit(){
    this.listEtatProjet();

    this.listeTypeProjet();

    this.listeProjets();
  }

  showCitoyen(){
    this.isCitoyen = true;
    this.isMunicipal = false;
    this.showEncours();
  }

  showMunicipal(){
    this.isMunicipal = true;
    this.isCitoyen = false;
    this.showEncours();
  }
  

  showEncours(){
    this.isEncours = true;
    this.isVote = false;
    this.isValider = false;
    this.isInvalider = false;
  }

  showVote(){
    this.isVote = true;
    this.isEncours = false;
    this.isValider = false;
    this.isInvalider = false;
  }

  showValider(){
    this.isValider = true;
    this.isVote = false;
    this.isEncours = false;
    this.isInvalider = false;
  }

  showInvalider(){
    this.isInvalider = true;
    this.isValider = false;
    this.isVote = false;
    this.isEncours = false;
  }

  // Liste des états d'un projet 
  listEtatProjet(){
    this.etatProjet.getAlls().subscribe(data=>{
      this.tabEtatProjet = data;
      // console.log(this.tabEtatProjet)
      
      // L'identifiant de l'etat en cours 
      let etatEncours = this.tabEtatProjet.find((element:any)=> element.statut == "EnCours");
      if(etatEncours){
        this.idEtatEncours = etatEncours.id
        console.log(this.idEtatEncours )
      }
      // L'identifiant de l'etat termine 
      let etatTermine = this.tabEtatProjet.find((element:any)=> element.statut == "Termine");
      if(etatTermine){
        this.idEtatTermine = etatTermine.id
        // console.log(this.idEtatTermine)
      }
      // L'identifiant de l'etat en cours 
      let etatValide = this.tabEtatProjet.find((element:any)=> element.statut == "Valide");
      if(etatValide){
        this.idEtatValide = etatValide.id
      }
      // L'identifiant de l'etat en cours 
      let etatInvalide = this.tabEtatProjet.find((element:any)=> element.statut == "Invalider");
      if(etatInvalide){
        this.idEtatInvalide = etatInvalide.id
      }
    })
  }

  // Liste des identifiants des types de projet
  listeTypeProjet(){
    this.typeProjet.getAlls().subscribe(data=>{
      this.tabTypeProjet = data;
      // console.log(this.tabTypeProjet)
      
      // L'identifiant de l'etat municipal
      let municipal = this.tabTypeProjet.find((element:any)=> element.nom == "municipal");
      if(municipal){
        this.idMunicipal = municipal.id
        console.log("municipal")
        console.log(this.idMunicipal)
      }

      // L'identifiant de l'etat citoyen
      let citoyen = this.tabTypeProjet.find((element:any)=> element.nom == "citoyen");
      if(citoyen){
        this.idCitoyen = citoyen.id
        console.log("citoyen")
        console.log(this.idCitoyen)
      }
    })
  }

  tabFilterdMunicipal: Projet[] = [];
  tabFilterdCitoyen: Projet[] = [];
  inputsearchM: string = "";
  inputsearchC: string = "";

  // Methode pour lister les projets 
  listeProjets(){
    this.projetService.getAlls().subscribe(data =>{
      // console.log(data);
      this.tabProjet = data;
      console.log(this.tabProjet);

      // Les projets municipaux 
      this.tabProjetFiltered = this.tabProjet;
      this.tabProjetMunicipal = this.tabProjet.filter((elemen:any) => elemen.idTypeProjet === this.idMunicipal)
      this.tabFilterdMunicipal = this.tabProjetMunicipal;
      // Les projets citoyens 
      this.tabProjetCitoyen = this.tabProjet.filter((elemen:any) => elemen.idTypeProjet === this.idCitoyen)
      this.tabFilterdCitoyen = this.tabProjetCitoyen;
      
      console.log(this.tabProjetCitoyen);
      console.log(this.tabProjetMunicipal);
      // Les projets en cours de vote 
      // this.tabProjetEncour = this.tabProjet.reverse().filter((element:any)=> element.idEtatProjet == this.idEtatEncours);
      // console.log(this.tabProjetEncour);

      // console.log(this.userConnect)
      // Les projets de l'utilisatur 
      // this.tabProjetUser = this.tabProjet.filter((elemen:any) => elemen.idUser === this.userConnect.id);
      // if(projetUser){
      //   console.log(projetUser);
      // }
      // console.log(this.tabProjetUser);

      
      // console.log(this.tabProjetFiltered);
      // // Les projets de l'utilisateurs validé 
      // this.tabProjetUserValide = this.getProjetsPage().filter(element => element.idEtatProjet === this.valideId);
      
      // // // Les projets de l'utilisateurs invalidé 
      // this.tabProjetUserInvalide = this.getProjetsPage().filter(element => element.idEtatProjet === this.invalideId);
      // console.log(this.tabProjetUserInvalide);
    })
  }

  // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
  // Rechercher projet de l'utilisateur connecté 
  onSearch(){
    // Recherche se fait selon le nom ou le prenom
    this.tabProjetFiltered = this.tabProjet.filter(
      (elt:any) => (elt?.titre.toLowerCase().includes(this.inputSerach.toLowerCase()))
    );
  }

  onSearchM(){
    // Recherche se fait selon le nom ou le prenom
    this.tabFilterdMunicipal = this.tabProjetMunicipal.filter(
      (elt:any) => (elt?.titre.toLowerCase().includes(this.inputsearchM.toLowerCase()))
    );
  }

  onSearchC(){
    this.tabFilterdCitoyen = this.tabProjetCitoyen.filter(
      (elt:any) => (elt?.titre.toLowerCase().includes(this.inputsearchC.toLowerCase()))

    )
  }

  // Liste des votes 
  listeVotes(){
    this.vote.getAlls().subscribe(data =>{
      this.tabVotes = data;
      console.log(this.tabVotes);
      
      // this.tabVotes.forEach(vote => {
      //   if (vote.idUser == this.userConnect.id) {
      //     this.disabledForUserAlredyVoted = true;
      //   }
      //   else
      //   {
      //     this.disabledForUserAlredyVoted = false;
      //   }
      // });
    })
  }

  // Gestion des votes
  // Voter Pour  
  voterPour(projet:any){
    // On demande une confirmation de vote 
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez voter pour ce projet",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#007A64",
      cancelButtonColor: "#F09E4D",
      confirmButtonText: "Oui, je vote!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.voteChoice.scrutin = "pour";
        this.voteChoice.idUser= this.userConnect.id;
        this.voteChoice.idProjet= projet.id;
        this.voteChoice.createdAt= new Date();
        this.voteChoice.createdBy= this.userConnect.username;
    
        // console.log(projet);
        // // On ajoute le vote dans tableau des votes 
        this.vote.add(this.voteChoice).subscribe(data=>{
          // projet.votes.push(this.voteChoice)
          this.listeVotes();
          this.verifierChamps("Vote enregistré", "", "success");

          // On change l'attribut voted en donnant la personne qui
          projet.voted.isvoted = true;
          projet.voted.votedBy = this.userConnect.username;
          console.log(projet.voted.isvoted);
          console.log(projet.voted.votedBy);
          console.log(projet);
          // On met à jour les projets 
          this.projetService.edit(projet.id, projet).subscribe(data =>{
            console.log(data);
            this.listeProjets();
          })
        });
        
      }
        
    });
  }

  // Voter contre 
  voterContre(projet:any){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez voter contre ce projet",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#007A64",
      cancelButtonColor: "#F09E4D",
      confirmButtonText: "Oui, je vote!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.voteChoice.scrutin = "contre";
        this.voteChoice.idUser= this.userConnect.id;
        this.voteChoice.idProjet= projet.id;
        this.voteChoice.createdAt= new Date();
        this.voteChoice.createdBy= this.userConnect.username;
        
        console.log(this.voteChoice);
        // On ajoute le vote dans tableau des votes 
        this.vote.add(this.voteChoice).subscribe(data=>{
          this.listeVotes();
          this.verifierChamps("Vote enregistré", "", "success");

          // On change l'attribut voted en donnant la personne qui
          projet.voted.isvoted = true;
          projet.voted.votedBy = this.userConnect.username;
          console.log(projet.voted.isvoted);
          console.log(projet.voted.votedBy);
          console.log(projet);
          // On met à jour les projets 
          this.projetService.edit(projet.id, projet).subscribe(data =>{
            console.log(data);
            this.listeProjets();
          })
          
        })
        
      }
        
    });

  }

  
  detailsProjet(projet:any){
    this.projet = projet;
  }
}
