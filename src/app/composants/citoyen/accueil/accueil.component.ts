import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';

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

  ngOnInit(): void {
  }

  image1: any;
  // Methode pour soumettre un projet 
  soumettreProjet(){
    console.log(this.projet);
    const fileUrl: string = URL.createObjectURL(this.projet.image);
    console.log(fileUrl)
    
  }

  // afficher l'image 
  image: string = "";
  // Methode pour uploader le fichier image 
  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    console.log(fileList);
    if (fileList) {
      const selectedFile = fileList[0];
      console.log(typeof(selectedFile))
      if (selectedFile) {
        if (selectedFile.type.match('image.*')) {
            this.image = (URL.createObjectURL(selectedFile));
        } 
      }
    }
  }


}
