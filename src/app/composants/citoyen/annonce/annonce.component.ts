import { Component } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  isAnnonces: boolean = true;

  showCommentaires(){
    this.isAnnonces = !this.isAnnonces
  }
}
