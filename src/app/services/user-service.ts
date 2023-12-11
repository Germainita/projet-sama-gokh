import { Injectable } from "@angular/core";
import { catchError, mapTo, Observable, of, Subject, tap, throwError } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { url } from "./apiUrl";
import {User} from "../models/user";


@Injectable({
  providedIn: "root"
})

export class UserService {
  votes$ = new Subject<User[]>(); //var super globale

  constructor(private http: HttpClient) {}

  // Liste
  getAlls() : Observable<any>{
    return this.http.get<User[]>(`${url}/votes`);
  }

  // geteById
  getById(id: number)
  {
    return this.http.get<User>(`${url}/users/`+ id);
  }

  // Ajouter
  add(vote : User) {
    return this.http.post<{ message: string }>(`${url}/users`, vote);
  }

  // Edition
  edit(id: number, vote : User) {
    return this.http.put<{ message: string }>(`${url}/users/` + id, vote);
  }

  // Suppression
  delete(id: number) {
    return this.http.delete<{ message: string }>(`${url}/users/` + id);
  }
}
