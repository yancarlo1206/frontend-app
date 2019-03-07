import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { NgxPermissionsService  } from 'ngx-permissions';

@Injectable()
export class DownloadPermission {


  constructor(private router: Router, public permissionsService: NgxPermissionsService) { }

   downloadPermission() {

      this.permissionsService.flushPermissions();
      
    }

}