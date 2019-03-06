import { Injectable } from '@angular/core';
import { User } from '../core/_models/user.model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint:string = 'http://localhost:8080/api/usuarios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get(this.urlEndPoint).pipe (
      map( (response) => response as User[] )
    );
  }

}