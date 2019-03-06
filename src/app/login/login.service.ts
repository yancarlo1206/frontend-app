import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { NgxPermissionsService  } from 'ngx-permissions';

import { StorageService } from "../core/_services/storage.service";

//import { AuthorityService } from "../core/_services/authority.service";
import { PermissionService } from "../core/_services/permission.service";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:8080/api';
  token;

  constructor(private http: HttpClient, private router: Router, private storageService: StorageService, public permissionService: PermissionService) { }
  //this.http.post(this.uri + '/usuarios', {usuario: usuario, clave: clave})
  login(usuario: string, clave: string) {

    this.http.post(this.uri + '/login', {usuario: usuario, clave: clave})
    .subscribe((resp: any) => {

      //this.router.navigate(['usuarios']);
      //localStorage.setItem('auth_token', resp.token);
      this.storageService.setCurrentSession(resp);
      this.permissionService.loadPermission(this.storageService.getCurrentToken());
      //const authoritys = this.authority.loadAuthority(this.storageService.getCurrentToken());
      //this.permissionsService.loadPermissions(authoritys);

      });

    }

    logout() {
      localStorage.removeItem('auth_token');
    }

    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
    }
}
