import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
// import { EtatProjet } from "../models/EtatProjet";
import { EtatProjet } from "../models/etatProjet";
import { TypeProjet } from "../models/typeProjet";


@Injectable({
    providedIn: "root"
})

export class TypeProjetService {
    typeProjets$ = new Subject<TypeProjet[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<TypeProjet[]>(`${url}/type-projets`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<TypeProjet>(`${url}/type-projets/`+ id);
      }
      
      // Ajouter  
      add(typeProjet : TypeProjet) {
        return this.http.post(`${url}/type-projets`, typeProjet);
      }
      
      // Edition 
      edit(id: number, typeProjet : TypeProjet) {
        return this.http.put(`${url}/type-projets/` + id, typeProjet);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete(`${url}/type-projets/` + id);
      }
}