import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'http://localhost:3500/'

  constructor(private http: HttpClient) {}
    criar(newUser: User): Observable<User> {
      return this.http.post<User>(this.api + 'user/register', newUser)
    };

    // list(): Observable<Product[]> {
    //   return this.http.get<Product[]>(this.api).pipe(
    //     catchError(err => {
    //       return of(err)
    //     })
    //   )
    // };

    // edit(user: User): Observable<User> {
    //   const url = `${this.api}/${funcionario.id}`
    //   return this.http.put<User>(url, funcionario).pipe(
    //     catchError(err => {
    //       return of(err)
    //     })
    //   )
    // };

    // delete(id: User): Observable<User> {
    //   const url = `${this.api}/${id}`
    //   return this.http.delete<User>(url)
    // }
}
