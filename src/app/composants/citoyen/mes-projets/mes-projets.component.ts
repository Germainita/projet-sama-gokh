import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-projets',
  templateUrl: './mes-projets.component.html',
  styleUrls: ['./mes-projets.component.css']
})
export class MesProjetsComponent {
  // déclaration des attributs 
  isSoumis:boolean = true;
  isValide: boolean = false;
  isInvalide: boolean = false;
  

  // Déclaration des méthodes 
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
}
