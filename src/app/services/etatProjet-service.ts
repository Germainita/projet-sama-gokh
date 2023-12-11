import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
// import { EtatProjet } from "../models/EtatProjet";
import { EtatProjet } from "../models/etatProjet";


@Injectable({
    providedIn: "root"
})

export class EtatProjetService {
    etatProjets$ = new Subject<EtatProjet[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<EtatProjet[]>(`${url}/etat-projets`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<EtatProjet>(`${url}/etat-projets/`+ id);
      }
      
      // Ajouter  
      add(etatProjet : EtatProjet) {
        return this.http.post(`${url}/etat-projets`, etatProjet);
      }
      
      // Edition 
      edit(id: number, etatProjet : EtatProjet) {
        return this.http.put(`${url}/etat-projets/` + id, etatProjet);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete(`${url}/etat-projets/` + id);
      }
}