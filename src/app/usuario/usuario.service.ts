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
    /*return this.http.get(this.urlEndPoint).pipe (
      map( (response) => response as User[] )
    );*/
    return this.http.get<User[]>(this.urlEndPoint);
  }

  create(usuario: User): Observable<User> {
  	return this.http.post<User>(this.urlEndPoint, usuario, {headers: this.httpHeaders});
  }

  getUsuario(id: string): Observable<User>{
    return this.http.get<User>(`${this.urlEndPoint}/${id}`);
  }

  update (usuario: User): Observable<User>{
    return this.http.put<User>(`${this.urlEndPoint}/${usuario.usuario}`, usuario, {headers: this.httpHeaders});
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

}
