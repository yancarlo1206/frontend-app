import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthorityService {


  constructor(private router: Router) { }

   loadAuthority(token: string) {

      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      var perms = JSON.parse(decodedToken.authorities);
      var permisos = [];

      for (var clave in perms){
        permisos.push(perms[clave].authority);
      }

      return permisos;
      
    }

}