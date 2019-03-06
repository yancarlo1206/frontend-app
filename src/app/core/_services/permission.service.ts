import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { NgxPermissionsService  } from 'ngx-permissions';
import { AuthorityService } from "./authority.service";

@Injectable()
export class PermissionService {


  constructor(private router: Router, public permissionsService: NgxPermissionsService, public authhorityService: AuthorityService) { }

   loadPermission(token: string) {

      const authoritys = this.authhorityService.loadAuthority(token);
      this.permissionsService.loadPermissions(authoritys);
      
    }

}