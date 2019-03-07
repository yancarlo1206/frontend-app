import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoadPermissionService } from "../core/_services/loadPermission.service";
import { StorageService } from "../core/_services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loadPermissionService: LoadPermissionService, private storageService: StorageService) { }

  logout() {
  	this.storageService.removeCurrentSession();
  	this.router.navigate(['/login']);
  }

  ngOnInit() {
  	this.loadPermissionService.loadPermission();
  }

}
