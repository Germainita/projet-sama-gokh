import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import {Vote} from "../models/vote";

@Injectable({
  providedIn: "root"
})

export class VoteService {
  votes$ = new Subject<Vote[]>(); //var super globale

  constructor(private http: HttpClient) {}

  // Liste
  getAlls() : Observable<any>{
    return this.http.get<Vote[]>(`${url}/votes`);
  }

  // geteById
  getById(id: number)
  {
    return this.http.get<Vote>(`${url}/votes/`+ id);
  }

  // Ajouter
  add(vote : Vote) {
    return this.http.post<{ message: string }>(`${url}/votes`, vote);
  }

  // Edition
  edit(id: number, vote : Vote) {
    return this.http.put<{ message: string }>(`${url}/votes/` + id, vote);
  }

  // Suppression
  delete(id: number) {
    return this.http.delete<{ message: string }>(`${url}/votes/` + id);
  }
}
