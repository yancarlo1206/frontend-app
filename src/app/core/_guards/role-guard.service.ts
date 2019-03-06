import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';
import { StorageService } from "../_services/storage.service";
import { AuthorityService } from "../_services/authority.service";

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public router: Router, private storageService: StorageService, private authority: AuthorityService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property

    if(!this.storageService.getCurrentToken()){
      return false;
    }
    
    const expectedRole = route.data.expectedRole;
    const token = this.storageService.getCurrentToken();
    // decode the token to get its payload
    const tokenPayload = decode(token);
    const authority = JSON.parse(tokenPayload.authorities);
    //console.log(authority);
    //console.log(tokenPayload.authorities.authority);
    const authoritys = this.authority.loadAuthority(token);
    var rol = false;
    for (var clave in authoritys){
        if(authoritys[clave] == expectedRole){
          rol = true;
        }
    }
    if (!this.storageService.getCurrentToken() || !rol) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}