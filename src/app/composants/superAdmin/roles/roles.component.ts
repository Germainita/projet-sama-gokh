import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role-service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-roles',
  templateUrl:  './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {
  roles: Role[] = [];
  nom: string = '';
  newRoleName: string= '' ; // Variable pour stocker le nom du nouveau
  updatedRoleDetails: any;
  roleAModifier : any;
  inEdition : any = false;


  

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.getAlls();
  }

  getAlls() {
   this.roleService.getAlls().subscribe( data=>{
    this.roles = data; // Assignez les données reçues à la variable 'roles'
    });
  }

  // Methode d'ajout
  add(form : NgForm) {
    if (form.invalid){
      return;
    }
    let role = new Role();
    role.nom = this.newRoleName;
    role.createdAt = new Date().toLocaleString();
    role.createdBy = '1'
    console.log('Ajouter role',role)
     // Réinitialiser la variable de stockage du nom du rôle

          // Méthode pour afficher un sweetalert2 apres vérification
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Voulez-vous vraiment ajouter ce rôle?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#007A64',
            cancelButtonColor: '#F09E4D',
            confirmButtonText: 'Oui, ajouter!',
            cancelButtonText: 'Annuler'
          }).then((result) => {
            if (result.isConfirmed) {
              // Si l'utilisateur confirme, procédez à l'ajout du rôle
              this.roleService.add(role).subscribe(data => {
                form.reset();
                this.newRoleName = '';
                Swal.fire(
                  'Ajouté!',
                  'Le rôle a été ajouté avec succès.',
                  'success'
                ).then(() => {
                  // Mettre à jour la liste des rôles uniquement après la confirmation
                  this.getAlls();
                });
              });
            } else {
              // Si l'utilisateur annule, n'exécutez aucune action d'ajout
              Swal.fire(
                'Annulé',
                'L\'ajout du rôle a été annulé.',
                'error'
              );
            }
          });    
}

// Methode de suppression de roles
deleteRole(roleId: number) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Voulez-vous vraiment supprimer ce rôle?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#007A64',
    cancelButtonColor: '#F09E4D',
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // Appel de la méthode de suppression du service
      this.roleService.delete(roleId).subscribe(() => {
        // Mettre à jour la liste des rôles après la suppression
        this.getAlls();
        Swal.fire(
          'Supprimé!',
          'Le rôle a été supprimé avec succès.',
          'success'
        );
      });
    } else {
      // Si l'utilisateur annule, affichez un message
      Swal.fire(
        'Annulé',
        'La suppression du rôle a été annulée.',
        'error'
      );
    }
  });
}
  

// Méthode de modification des roles
editRole(roleId: number, updatedRole: Role) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Voulez-vous vraiment modifier ce rôle?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#007A64',
    cancelButtonColor: '#F09E4D',
    confirmButtonText: 'Oui, modifier!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      // Appel de la méthode de modification du service
      this.roleService.edit(roleId, updatedRole).subscribe(() => {
        // Mettre à jour la liste des rôles après la modification
        this.getAlls();
        Swal.fire(
          'Modifié!',
          'Le rôle a été modifié avec succès.',
          'success'
        );
      });
    } else {
      // Si l'utilisateur annule, affichez un message
      Swal.fire(
        'Annulé',
        'La modification du rôle a été annulée.',
        'error'
      );
    }
  });
}





}








