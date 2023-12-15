import { Component, OnInit } from '@angular/core';
import { CommuneService } from 'src/app/services/commune-service';



@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit{

  communes: any[] = []; // Assurez-vous que le type correspond à votre modèle de données Commune

  constructor(private communeService: CommuneService) {}

  ngOnInit(): void {
    this.getAlls();
  }
 

  getAlls(): void {
    this.communeService.getAlls().subscribe((data: any[]) => {
      this.communes = data;
    });
  }
}
