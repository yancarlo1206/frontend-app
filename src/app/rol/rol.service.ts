import { Injectable } from '@angular/core';
import { Rol } from '../core/_models/rol.model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RolService {
  private urlEndPoint:string = 'http://localhost:8080/rol';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.urlEndPoint);
  }

  create(rol: Rol): Observable<Rol> {
  	return this.http.post<Rol>(this.urlEndPoint, rol, {headers: this.httpHeaders});
  }

  getRol(id: string): Observable<Rol>{
    return this.http.get<Rol>(`${this.urlEndPoint}/${id}`);
  }

  update (rol: Rol): Observable<Rol>{
    return this.http.put<Rol>(`${this.urlEndPoint}/${rol.id}`, rol, {headers: this.httpHeaders});
  }

  delete(id: string): Observable<Rol> {
    return this.http.delete<Rol>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }

}
