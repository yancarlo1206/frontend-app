import { Injectable } from '@angular/core';
import { Perfil } from '../core/_models/perfil.model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private urlEndPoint:string = 'http://localhost:8080/perfil';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.urlEndPoint);
  }

  create(perfil: Perfil): Observable<Perfil> {
  	return this.http.post<Perfil>(this.urlEndPoint, perfil, {headers: this.httpHeaders});
  }

  getPerfil(id: string): Observable<Perfil>{
    return this.http.get<Perfil>(`${this.urlEndPoint}/${id}`);
  }

  update (perfil: Perfil): Observable<Perfil>{
    return this.http.put<Perfil>(`${this.urlEndPoint}/${perfil.id}`, perfil, {headers: this.httpHeaders});
  }

  delete(id: string): Observable<Perfil> {
    return this.http.delete<Perfil>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

}
