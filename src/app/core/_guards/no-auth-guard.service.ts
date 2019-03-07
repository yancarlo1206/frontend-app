import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from "../_services/storage.service";

@Injectable()
export class NoAuthGuardService implements CanActivate {

  constructor(public router: Router, private storageService: StorageService) {}

  canActivate(): boolean {

    if(this.storageService.getCurrentToken()){
      return false;
    }

    return true;
  }

}