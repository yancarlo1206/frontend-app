import {NgModule, Optional, SkipSelf} from '@angular/core';
//import {fakeBackendProvider} from "./helper/fake-backend";
//import {MockBackend} from "@angular/http/testing";
//import {BaseRequestOptions} from "@angular/http";
import {StorageService} from "./_services/storage.service";
import {AuthorityService} from "./_services/authority.service";
import {PermissionService} from "./_services/permission.service";
import { DownloadPermission } from "./_services/downloadPermission.service";
//import {AuthInterceptor} from "./_interceptor/auth.interceptor";
//import {AuthorizatedGuard} from "./guards/authorizated.guard";

@NgModule({
  declarations: [  ],
  imports: [],
  providers: [
    StorageService,
    AuthorityService,
    PermissionService,
    DownloadPermission
    //AuthInterceptor
    //AuthorizatedGuard,
    //fakeBackendProvider,
    //MockBackend,
    //BaseRequestOptions
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