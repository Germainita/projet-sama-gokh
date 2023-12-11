import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import { Commune } from "../models/commune";


@Injectable({
    providedIn: "root"
})

export class CommuneService {
    communes$ = new Subject<Commune[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<Commune[]>(`${url}/communes`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<Commune>(`${url}/communes/`+ id);
      }
      
      // Ajouter  
      add(commune : Commune) {
        return this.http.post<{ message: string }>(`${url}/communes`, commune);
      }
      
      // Edition 
      edit(id: number, commune : Commune) {
        return this.http.put<{ message: string }>(`${url}/communes/` + id, commune);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete<{ message: string }>(`${url}/communes/` + id);
      }
}