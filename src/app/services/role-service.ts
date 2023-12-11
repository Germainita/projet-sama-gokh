import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
// import { Role } from "../models/Role";
import { Role } from "../models/role";


@Injectable({
    providedIn: "root"
})

export class RoleService {

    roles$ = new Subject<Role[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<Role[]>(`${url}/roles`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<Role>(`${url}/roles/`+ id);
      }
          
      // Ajouter  
      add(role : Role) {
        return this.http.post(`${url}/roles`, role);
      }
      
      // Edition 
      edit(id: number, role : Role) {
        return this.http.put(`${url}/roles/` + id, role);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete(`${url}/roles/` + id);
      }
}