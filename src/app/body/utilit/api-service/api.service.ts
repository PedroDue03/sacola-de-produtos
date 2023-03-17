import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}
    criar(newUser: User): Observable<User> {
      return this.http.post<User>(this.api + 'register', newUser)
    };

    // listar(): Observable<User[]> {
    //   return this.http.get<User[]>(this.api).pipe(
    //     catchError(err => {
    //       return of(err)
    //     })
    //   )
    // };

    // editar(user: User): Observable<User> {
    //   const url = `${this.api}/${funcionario.id}`
    //   return this.http.put<User>(url, funcionario).pipe(
    //     catchError(err => {
    //       return of(err)
    //     })
    //   )
    // };

    // deletar(id: User): Observable<User> {
    //   const url = `${this.api}/${id}`
    //   return this.http.delete<User>(url)
    // }
}
