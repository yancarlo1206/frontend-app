import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StorageService } from "../core/_services/storage.service";
import { LoadPermissionService } from "../core/_services/loadPermission.service";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:8080';

  constructor(
    private http: HttpClient, private router: Router, private loadPermissionService: LoadPermissionService,
    private storageService: StorageService 
   ) { }
  //this.http.post(this.uri + '/usuarios', {usuario: usuario, clave: clave})
  login(usuario: string, clave: string) {

    this.http.post(this.uri + '/login', {usuario: usuario, clave: clave})
    .subscribe((resp: any) => {

      this.storageService.setCurrentSession(resp);
      this.loadPermissionService.loadPermission();
      this.router.navigate(['/home']);
    });

    }

    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
    }
}
