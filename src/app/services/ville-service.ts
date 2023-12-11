import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import {Ville} from "../models/ville";
// import {User} from "../models/user";


@Injectable({
  providedIn: "root"
})

export class VilleService {
  votes$ = new Subject<Ville[]>(); //var super globale

  constructor(private http: HttpClient) {}

  // Liste
  getAlls() : Observable<any>{
    return this.http.get<Ville[]>(`${url}/villes`);
  }

  // geteById
  getById(id: number)
  {
    return this.http.get<Ville>(`${url}/villes/`+ id);
  }

  // Ajouter
  add(vote : Ville) {
    return this.http.post<{ message: string }>(`${url}/villes`, vote);
  }

  // Edition
  edit(id: number, vote : Ville) {
    return this.http.put<{ message: string }>(`${url}/villes/` + id, vote);
  }

  // Suppression
  delete(id: number) {
    return this.http.delete<{ message: string }>(`${url}/villes/` + id);
  }
}
