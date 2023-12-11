import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import { Projet } from "../models/projet";


@Injectable({
    providedIn: "root"
})

export class ProjetService {
    projets$ = new Subject<Projet[]>(); //var super globale

    constructor(private http: HttpClient) {}

      // Liste
      getAlls() : Observable<any>{
        return this.http.get<Projet[]>(`${url}/projets`);
      }

      // geteById
      getById(id: number)
      {
        return this.http.get<Projet>(`${url}/projets/`+ id);
      }

      // Ajouter
      add(projet : Projet) {
        return this.http.post(`${url}/projets`, projet);
      }

      // Edition
      edit(id: number, projet : Projet) {
        return this.http.put(`${url}/projets/` + id, projet);
      }

      // Suppression
      delete(id: number) {
        return this.http.delete(`${url}/projets/` + id);
      }


}
