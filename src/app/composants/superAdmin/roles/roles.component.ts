import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role-service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {
  roles: Role[] = [];
  nom: string = '';
  newRoleName: string = ''; // Variable pour stocker le nom du nouveau

  

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getAlls();
  }

  getAlls() {
   this.roleService.getAlls().subscribe( data=>{
    this.roles = data; // Assignez les données reçues à la variable 'roles'
    });
  }

  add(role : Role) {
     this.roleService.add(role).subscribe(data => {
      console.log('Ajouter role')
     })


 }


}
