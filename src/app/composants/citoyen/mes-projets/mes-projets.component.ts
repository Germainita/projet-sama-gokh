import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/models/annonce';
import { EtatProjet } from 'src/app/models/etatProjet';
import { Projet } from 'src/app/models/projet';
import { TypeProjet } from 'src/app/models/typeProjet';
import { User } from 'src/app/models/user';
import { AnnonceService } from 'src/app/services/annonce-service';
import { EtatProjetService } from 'src/app/services/etatProjet-service';
import { ProjetService } from 'src/app/services/projet-service';
import { TypeProjetService } from 'src/app/services/typeProjet-service';
import { UserService } from 'src/app/services/user-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-projets',
  templateUrl: './mes-projets.component.html',
  styleUrls: ['./mes-projets.component.css']
})
export class MesProjetsComponent implements OnInit {
  // déclaration des attributs 
  isSoumis:boolean = true;
  isValide: boolean = false;
  isInvalide: boolean = false;

  // Déclaration des variables
  titre: string = "";
  description: string = "";
  image: string = "";
  delai: any;
  cout!: number ;

  inputSerach!: string;

  // Attribut pour la pagination dans .ts
  mesProjet = 6; // Nombre d'annonces par page
  pageActuelle = 1; // Page actuelle
  
  // un objet de type projet 
  projet =  new Projet;

  tabProjet: Projet[]  = [];
  tabProjetUser: Projet[]  = [];
  tabProjetUserValide: Projet[]  = [];
  tabProjetUserInvalide: Projet[]  = [];
  tabProjetFiltered: Projet[]  = [];
  
  
  tabUsers: User[] = [];

  userConnect = new User;

  tabEtatProjet: EtatProjet[] = [];

  tabTypeProjet: TypeProjet[] = [];

  // idEtatEncours: number = 1;  
  // idEtatTermine: number = 1;
  // idEtatValide: number = 1;
  // idEtatInvalide: number = 1;

  encourId: number = 0;
  termineId: number = 0;
  valideId: number = 0;
  invalideId: number = 0;

  // Projets citoyens
  idCitoyen: number = 0;

  idMunicipal: number = 0;

  // Déclaration des méthodes 

  // Appel du constructur 
  constructor(
    private projetService: ProjetService, 
    private annonce:AnnonceService, 
    private user: UserService, 
    private router: Router,
    private etatProjet: EtatProjetService,
    private typeProjet: TypeProjetService
  ){}

  ngOnInit(): void {
    this.listeUsers();

    this.listEtatProjet();

    this.listeProjets();
    
  }


  showSoumis(){
    this.isSoumis= true;
    this.isValide = false;
    this.isInvalide = false;
  }

  showValide(){
    this.isSoumis= false;
    this.isValide = true;
    this.isInvalide = false;
  }

  showInvalide(){
    this.isSoumis= false;
    this.isValide = false;
    this.isInvalide = true;
  }

   // Liste des utilisateurs 
   listeUsers(){
    this.user.getAlls().subscribe(data =>{
      this.tabUsers =  data;
      // console.log(this.tabUsers);

      this.userConnect = this.tabUsers[1];
      // console.log(this.userConnect)
    })
  }

  // Liste des états d'un projet 
  listEtatProjet(){
    this.etatProjet.getAlls().subscribe(data=>{
      this.tabEtatProjet = data;
      // console.log(this.tabEtatProjet)
      
      // L'identifiant de l'etat en cours 
      let etatEncours = this.tabEtatProjet.find((element:any)=> element.statut == "EnCours");
      if(etatEncours){
        this.encourId = etatEncours.id
        console.log(this.encourId )
      }
      // L'identifiant de l'etat termine 
      let etatTermine = this.tabEtatProjet.find((element:any)=> element.statut == "Termine");
      if(etatTermine){
        this.termineId = etatTermine.id
        // console.log(this.idEtatTermine)
      }
      // L'identifiant de l'etat en cours 
      let etatValide = this.tabEtatProjet.find((element:any)=> element.statut == "Valide");
      if(etatValide){
        this.valideId = etatValide.id
      }
      // L'identifiant de l'etat en cours 
      let etatInvalide = this.tabEtatProjet.find((element:any)=> element.statut == "Invalider");
      if(etatInvalide){
        this.invalideId = etatInvalide.id
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
      // this.tabProjetEncour = this.tabProjet.reverse().filter((element:any)=> element.idEtatProjet == this.idEtatEncours);
      // console.log(this.tabProjetEncour);

      // console.log(this.userConnect)
      // Les projets de l'utilisatur 
      this.tabProjetUser = this.tabProjet.filter((elemen:any) => elemen.idUser === this.userConnect.id);
      // if(projetUser){
      //   console.log(projetUser);
      // }
      console.log(this.tabProjetUser);

      this.tabProjetFiltered = this.tabProjetUser;
      // console.log(this.tabProjetFiltered);
      // Les projets de l'utilisateurs validé 
      this.tabProjetUserValide = this.getProjetsPage().filter(element => element.idEtatProjet === this.valideId);
      
      // // Les projets de l'utilisateurs invalidé 
      this.tabProjetUserInvalide = this.getProjetsPage().filter(element => element.idEtatProjet === this.invalideId);
      // console.log(this.tabProjetUserInvalide);
    })
  }

  // Rechercher projet de l'utilisateur connecté 
  onSearch(){
    // Recherche se fait selon le nom ou le prenom
    this.tabProjetFiltered = this.tabProjetUser.filter(
      (elt:any) => (elt?.titre.toLowerCase().includes(this.inputSerach.toLowerCase()))
    );
  }

  // Methode pour detals produit 
  detailsProjet(projet:any){
    this.projet = projet;
  }

  // Vider les champs du formulaire 
  viderChamps(){
    this.titre = "";
    this.description = "";
    this.image = "";
    this.delai = "";
    this.cout = 0 ;
  }

 
  // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  // Charger infos projet au niveau du formulaire 
  chargerInfos(projet:any){
    this.projet = projet;
    this.titre = projet.titre;
    this.description = projet.description;
    this.delai = projet.delai;
    this.cout = projet.cout;
    this.image = projet.image;
  }
 
  // Mofier le projet 
  modifier(){
    this.projet.titre = this.titre
    this.projet.description = this.description
    this.projet.delai = new Date (this.delai)
    this.projet.cout = this.cout
    this.projet.image = this.image

    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez modifier ce projet",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#007A64",
      cancelButtonColor: "#F09E4D",
      confirmButtonText: "Oui, je modifie!"
    }).then((result) => {
      if (result.isConfirmed) {
          // On met à jour les projets 
          this.projetService.edit(this.projet.id, this.projet).subscribe(data =>{
            console.log(data);
            this.listeProjets();
            this.verifierChamps("Modofication réussie", "", "success")
          })
      };  
    });

  

    // On fait appelle à l'API pour modifier 
    // this.projetService.edit(this.projet.id, this.projet).subscribe(data =>{
    //   console.log(data);
    //   this.listeProjets();
    // })
  }

   // Methode pour soumettre un projet 
   soumettreProjet(){
    // console.log(this.idEtatEncours);
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
      objetProjet.idEtatProjet= this.encourId;
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

  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getProjetsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.mesProjet;
    const indexFin = indexDebut + this.mesProjet;
    return this.tabProjetFiltered.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.tabProjetFiltered.length / this.mesProjet);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }
  
  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.tabProjetFiltered.length / this.mesProjet);
  }

}
