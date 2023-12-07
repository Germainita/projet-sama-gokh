import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samagokh';

  ngOnInit(): void {
    
  }

  test(){
    Swal.fire("Erreur", "Test", "error");
  }

  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
}
