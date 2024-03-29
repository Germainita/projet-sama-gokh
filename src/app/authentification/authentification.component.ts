import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{

  constructor(private route: Router, private user: UserService){}

  contenu='exemple@gmail.com'
  imageUrl='../../assets/img-connexion/femme-affaires-attrayant-bras-croises_13339-12510.avif'
  // email=true

  ngOnInit(): void {
    
  }

  //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }



  // attributs
  nom = "";
  prenom = "";
  // numero = "";
  email = "";
  pass = "";
  // formChoice=true;


  // methodes
  verifierLogin() {
    console.log({email: this.email, pass: this.pass});
    if (this.email == "" || this.pass == "") {

      this.showMessage("error","Sorry",'Veuillez saisir tous les champs');
    }else if(this.pass.length<8){
        this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
      }
      else {
        if (this.email == "soly@gmail.com" && this.pass == "passer123&"){
          this.route.navigate(['/superAdmin']);
          this.showMessage('success','Thanks','Connexion faite avec succès');
        }

        else if (this.email == "germaine@gmail.com" && this.pass == "passer123&"){
          this.route.navigate(['/acceuil-maire']);
          this.showMessage('success','Thanks','Connexion faite avec succès');
        }

        else if (this.email == "khady@gmail.com" && this.pass == "passer123&"){
          this.route.navigate(['/accueilAdmin']);
          this.showMessage('success','Thanks','Connexion faite avec succès');
        }

        else if (this.email == "gege@gmail.com" && this.pass == "passer123&"){
          this.route.navigate(['/accueil']);
          this.showMessage('success','Thanks','Connexion faite avec succès');
        }
        
    }
    
  }


  verifierRegister() {

    if (this.nom == "" || this.prenom == "" || this.email == "" || this.pass == "" ) {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Veuillez saisir tous les champs',
      })
    }
    else if(this.pass.length<8){
      this.showMessage("error","Sorry",'Le password doit être > ou = à 8 caractère');
    }


    else {
      Swal.fire({
        icon: 'success',
        title: 'Thanks',
        text: 'Connexion faite avec succès',
      })
      this.showForm()


    }

  }

  showMessage(icon:any,title:any,text:any){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    })
  }


  showForm(){
    // this.formChoice=!this.formChoice;
    this.nom="";
    this.prenom="";
    // this.numero="";
    this.email="";
    this.pass="";
  }
}
