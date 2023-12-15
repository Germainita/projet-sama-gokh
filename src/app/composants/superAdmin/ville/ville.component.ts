import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville-service';



@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})


export class VilleComponent implements OnInit{
  villes: Ville[] = [];
  nom: string = '';
 
  constructor(private villeService: VilleService) {}

  ngOnInit(): void {
    this.getAlls();
  }

  getAlls(): void {
    this.villeService.getAlls().subscribe((data: Ville[]) => {
      this.villes = data; // Mettez à jour la variable villes avec les données récupérées
    });
  }





  
}