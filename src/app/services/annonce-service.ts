import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';
import { Annonce } from "../models/annonce";
import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";

@Injectable({
    providedIn: "root"
})

export class AnnonceService {
    annonces$ = new Subject<Annonce[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<Annonce[]>(`${url}/annonces`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<Annonce>(`${url}/annonces/`+ id);
      }
      
      // Ajouter  
      add(annonce : Annonce) {
        return this.http.post<{ message: string }>(`${url}/annonces`, annonce);
      }
      
      // Edition 
      edit(id: number, annonce : Annonce) {
        return this.http.put<{ message: string }>(`${url}/Annonce/` + id, annonce);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete<{ message: string }>(`${url}/Annonce/` + id);
      }
}