import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { StorageService } from "./storage.service";
import { PermissionService } from "./permission.service";

@Injectable({
  providedIn: 'root'
})
export class LoadPermissionService {

  constructor(private router: Router, private storageService: StorageService, public permissionService: PermissionService) { }
  
  loadPermission() {

      this.permissionService.loadPermission(this.storageService.getCurrentToken());

    }

}