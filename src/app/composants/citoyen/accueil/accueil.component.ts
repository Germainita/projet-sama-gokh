import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  
  // Déclaration des variables 
  // un objet de type projet 
  projet =  new Projet;

  tabProjet: Projet[]  = [];

  // Appel du constructur 
  constructor(private projetService: ProjetService){}

  ngOnInit(): void {
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

  // Methode pour soumettre un projet 
  soumettreProjet(){
    // On vérifie s les informations ne sont pas vides 
    if(!this.projet.titre){
      this.verifierChamps("Impossible!", "Le titre est obligatoire", "Erreur")
    }
    else if(!this.projet.description){
      this.verifierChamps("Impossible!", "Donnez une déscription", "Erreur")
    }
    else if(!this.projet.cout){
      this.verifierChamps("Impossible!", "Donnez le cout du projet", "Erreur")
    }
    else if(!this.projet.delai){
      this.verifierChamps("Impossible!", "Le délai est obligatoire", "Erreur")
    }

    else {
      this.projetService.add(this.projet).subscribe(data =>{
        console.log(data);
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


}
