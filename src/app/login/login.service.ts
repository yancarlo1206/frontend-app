import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StorageService } from "../core/_services/storage.service";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:8080/api';
  token;

  constructor(private http: HttpClient, private router: Router, private storageService: StorageService) { }
//this.http.post(this.uri + '/usuarios', {usuario: usuario, clave: clave})
  login(usuario: string, clave: string) {

    this.http.post(this.uri + '/login', {usuario: usuario, clave: clave})
    .subscribe((resp: any) => {

      //this.router.navigate(['usuarios']);
      //localStorage.setItem('auth_token', resp.token);
      this.storageService.setCurrentSession(resp);

      });

    }

    logout() {
      localStorage.removeItem('auth_token');
    }

    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
    }
}
