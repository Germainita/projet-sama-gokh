import { Component, OnInit } from '@angular/core';

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

  // Déclaration des méthodes
  ngOnInit(){
    
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
  // showProjetType(){
  //   this.isMunicipal = !this.isMunicipal;
  //   this.isCitoyen = !this.isCitoyen;
  // }

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
}
