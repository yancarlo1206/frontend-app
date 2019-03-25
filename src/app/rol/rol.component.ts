import { Component, OnInit } from '@angular/core';
import { Rol } from '../core/_models/rol.model';
import { RolService } from './rol.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LoadPermissionService } from "../core/_services/loadPermission.service";

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  rol: Rol[];

  constructor(private rolService: RolService,  private router: Router, private loadPermissionService: LoadPermissionService) { }

  delete(rol: Rol): void {
    Swal.fire({
      title: 'Estás seguro?',
      text: "No podras revertir el proceso!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borra el registro'
    }).then((result) => {
      if (result.value) {
        this.rolService.delete(rol.id)
          .subscribe(response => {
              this.rol = this.rol.filter(cli => cli != rol)
              Swal.fire(
                'Borrado!',
                'El registro ha sido borrado.',
                'success'
              )
            }
          );
        
      }
    })

  }

  ngOnInit() {
    this.loadPermissionService.loadPermission();
    this.rolService.getRoles().subscribe(
    (rol) => {this.rol = rol}
  );
  }

}
