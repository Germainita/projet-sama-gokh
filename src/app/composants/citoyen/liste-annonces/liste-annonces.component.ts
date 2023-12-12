import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent {
  isAnnonces: boolean = true;

  showCommentaires(){
    this.isAnnonces = !this.isAnnonces
  }

}
