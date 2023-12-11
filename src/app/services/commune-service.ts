import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import { Commune } from "../models/commune";


@Injectable({
    providedIn: "root"
})

export class CommuneService {
    commentaires$ = new Subject<Commune[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<Commune[]>(`${url}/Communes`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<Commune>(`${url}/Communes/`+ id);
      }
      
      // Ajouter  
      add(Commune : Commune) {
        return this.http.post<{ message: string }>(`${url}/Communes`, Commune);
      }
      
      // Edition 
      edit(id: number, Commune : Commune) {
        return this.http.put<{ message: string }>(`${url}/Communes/` + id, Commune);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete<{ message: string }>(`${url}/Communes/` + id);
      }
}