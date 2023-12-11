import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';
// import { commentaire } from "../models/commentaire";
import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import { Commentaire } from "../models/commentaire";

@Injectable({
    providedIn: "root"
})

export class CommentaireService {
    commentaires$ = new Subject<Commentaire[]>(); //var super globale

    constructor(private http: HttpClient) {}
    
      // Liste 
      getAlls() : Observable<any>{
        return this.http.get<Commentaire[]>(`${url}/commentaires`);
      }
    
      // geteById
      getById(id: number)
      {
        return this.http.get<Commentaire>(`${url}/commentaires/`+ id);
      }
      
      // Ajouter  
      add(commentaire : Commentaire) {
        return this.http.post<{ message: string }>(`${url}/commentaires`, commentaire);
      }
      
      // Edition 
      edit(id: number, commentaire : Commentaire) {
        return this.http.put<{ message: string }>(`${url}/commentaires/` + id, commentaire);
      }
      
      // Suppression
      delete(id: number) {
        return this.http.delete<{ message: string }>(`${url}/commentaires/` + id);
      }
}