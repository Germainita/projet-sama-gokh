import { Component } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  showComments: boolean = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }

}
