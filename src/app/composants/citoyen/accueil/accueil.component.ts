import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
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
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  // Déclaration des variables
  titre: string = "";
  description: string = "";
  image: string = "";
  delai: any;
  cout!: number ;
  // un objet de type projet 
  projet =  new Projet;

  tabProjet: Projet[]  = [];
  tabProjetPub: Projet[]  = [];
  tabAnnonces: Annonce[]  = [];
  tabAnnoncesPub: Annonce[]  = [];

  tabUsers: User[] = [];

  userConnect = new User;

  tabEtatProjet: EtatProjet[] = [];

  idEtatEncours: number = 0;
  idEtatTermine: number = 0;
  idEtatValide: number = 0;
  idEtatInvalide: number = 0;

  tabProjetEncour: Projet[] = [];

  tabTypeProjet: TypeProjet[] = [];
  // Projets municipaux
  idMunicipal: number = 0;
  tabProjetM: Projet[] = [];

  // Projets citoyens
  idCitoyen: number = 0;
  tabProjetC: Projet[] = [];

  // Pour les votes 
  tabVotes: Vote [] = [];
  tabVotesProjet : Vote [] = [];

  voteChoice = new Vote;

  disabledForUserAlredyVoted : any;

  // Projets vu par l'utilisateur 
  

  // Appel du constructur 
  constructor(
    private projetService: ProjetService, 
    private annonce:AnnonceService, 
    private user: UserService, 
    private router: Router,
    private etatProjet: EtatProjetService,
    private typeProjet: TypeProjetService,
    private vote: VoteService,
    ){}

  ngOnInit(): void {
    // liste des etatProjet
    this.listEtatProjet();

    // Liste type projet 
    this.listeTypeProjet()

    // liste des projets 
    this.listeProjets();

    // Liste des utilisateurs 
    this.listeUsers();

    // liste des annonces
    this.listeAnnonces();  
    
    // Liste de tous les votes 
    this.listeVotes();
  }

  // Vider les champs du formulaire 
  viderChamps(){
    this.titre = "";
    this.description = "";
    this.image = "";
    this.delai = "";
    this.cout = 0 ;
  }

  // Methode pour uploader le fichier image 
  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    // console.log(fileList);
    if (fileList) {
      const selectedFile = fileList[0];
      console.log(typeof(selectedFile))
      if (selectedFile) {
        if (selectedFile.type.match('image.*')) {
            this.projet.image = (URL.createObjectURL(selectedFile));
            console.log(this.projet);
        } 
      }
    }
  }

  // Vider les champs
  viderChampsProjet(){
    this.projet.titre = "";
    this.projet.description = "";
    // this.projet.delai = "";
    this.projet.titre = "";
    this.projet.titre = "";
    this.projet.titre = "";
    this.projet.titre = "";
    this.projet.titre = "";
    this.projet.titre = "";
  }

  // Methode pour soumettre un projet 
  soumettreProjet(){
    console.log(this.idEtatEncours);
    console.log(this.idCitoyen);
    // console.log(typeof(this.projet.delai))
    // let delai = new Date(this.projet.delai)
    // console.log(typeof(delai));
    // console.log(this.projet)
    // On vérifie s les informations ne sont pas vides 
    if(!this.titre){
      this.verifierChamps("Impossible!", "Le titre est obligatoire", "Erreur")
    }
    else if(!this.description){
      this.verifierChamps("Impossible!", "Donnez une déscription", "Erreur")
    }
    else if(!this.cout){
      this.verifierChamps("Impossible!", "Donnez le cout du projet", "Erreur")
    }
    else if(!this.delai){
      this.verifierChamps("Impossible!", "Le délai est obligatoire", "Erreur")
    }
    else if(!this.image){
      this.verifierChamps("Impossible!", "L'image est obligatoire'", "Erreur")
    }

    else {
      let objetProjet = new Projet;
      objetProjet.titre= this.titre;
      objetProjet.description= this.description;
      objetProjet.image= this.image
      objetProjet.cout= this.cout;
      objetProjet.delai= new Date (this.delai);
      objetProjet.etat= true;
      objetProjet.idEtatProjet= this.idEtatEncours;
      objetProjet.idTypeProjet= this.idCitoyen;
      objetProjet.idUser= this.userConnect.id;
      objetProjet.createdAt= new Date();
      objetProjet.createdBy= this.userConnect.username;
      objetProjet.updatedAt= new Date();
      objetProjet.updatedBy= this.userConnect.username;
      objetProjet.voted = {isvoted: false, votedBy:""}
      // this.projet.votes= []

      this.projetService.add(objetProjet).subscribe(data =>{
        console.log(data);
        console.log("Ajouter")
        this.verifierChamps("Felicitation!", "Projet ajouté avec success", "success");
        this.listeProjets();
        this.viderChamps();
      })
    }
        
  }

  // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  // Liste des états d'un projet 
  listEtatProjet(){
    this.etatProjet.getAlls().subscribe(data=>{
      this.tabEtatProjet = data;
      console.log(this.tabEtatProjet)
      
      // L'identifiant de l'etat en cours 
      let etatEncours = this.tabEtatProjet.find((element:any)=> element.statut == "EnCours");
      if(etatEncours){
        this.idEtatEncours = etatEncours.id
        console.log("id etat en cours");
        console.log(this.idEtatEncours);
      }
      // L'identifiant de l'etat termine 
      let etatTermine = this.tabEtatProjet.find((element:any)=> element.statut == "Termine");
      if(etatTermine){
        this.idEtatTermine = etatTermine.id
        console.log(this.idEtatTermine)
      }
      // L'identifiant de l'etat en cours 
      let etatValide = this.tabEtatProjet.find((element:any)=> element.statut == "Valide");
      if(etatValide){
        this.idEtatValide = etatValide.id
      }
      // L'identifiant de l'etat en cours 
      let etatInvalide = this.tabEtatProjet.find((element:any)=> element.statut == "Invalide");
      if(etatInvalide){
        this.idEtatInvalide = etatInvalide.id
      }
    })
  }

  // Liste des projets municipaux 
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

  // Methode pour lister les projets 
  listeProjets(){
    this.projetService.getAlls().subscribe(data =>{
      // console.log(data);
      this.tabProjet = data;

      console.log(this.tabProjet);

      // Les projets en cours de vote 
      this.tabProjetEncour = this.tabProjet.reverse().filter((element:any)=> element.idEtatProjet == this.idEtatEncours);
      console.log(this.tabProjetEncour);

      this.tabProjetPub = [];

      // Les trois premiers projets en cours de vote
      for (let i=0; i < this.tabProjetEncour.length; i++){
        this.tabProjetPub.push(this.tabProjetEncour[i]);
        if(i==2){
          break;
        }
      }
    })
  }

  
  // Liste des utilisateurs 
  listeUsers(){
    this.user.getAlls().subscribe(data =>{
      this.tabUsers =  data;
      // console.log(this.tabUsers);

      this.userConnect = this.tabUsers[1];
    })
  }

  // liste des annonces 
  listeAnnonces(){
    this.annonce.getAlls().subscribe(data =>{
      this.tabAnnonces = data;
      console.log(this.tabAnnonces.length);
      for (let i=0; i < this.tabAnnonces.length; i++){
        this.tabAnnoncesPub.push(this.tabAnnonces[i]);
        if(i==2){
          break;
        }
      }
      // console.log(this.tabAnnoncesPub)
    })
  }

  // Methode plus de projets 
  plusProjet(){
    this.router.navigate(['/projets']);
  }

  // Methode pour la déconnection 
  deconnexion(){
    this.router.navigate(['/visiteur']);
  }

  // Liste des votes 
  listeVotes(){
    this.vote.getAlls().subscribe(data =>{
      this.tabVotes = data;
      console.log(this.tabVotes);
      
      this.tabVotes.forEach(vote => {
        if (vote.idUser == this.userConnect.id) {
          this.disabledForUserAlredyVoted = true;
        }
        else
        {
          this.disabledForUserAlredyVoted = false;
        }
      });
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
