import {NgModule, Optional, SkipSelf} from '@angular/core';

import {StorageService} from "./_services/storage.service";
import {AuthorityService} from "./_services/authority.service";
import {PermissionService} from "./_services/permission.service";
import { DownloadPermission } from "./_services/downloadPermission.service";

import { AuthGuardService } from './_guards/auth-guard.service';
import { NoAuthGuardService } from './_guards/no-auth-guard.service';
import { RoleGuardService } from './_guards/role-guard.service';

@NgModule({
  declarations: [  ],
  imports: [],
  providers: [
    StorageService,
    AuthorityService,
    PermissionService,
    DownloadPermission,
    AuthGuardService, 
    RoleGuardService,
    NoAuthGuardService
  ],
  bootstrap: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}