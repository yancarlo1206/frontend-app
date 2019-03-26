import { Component, OnInit } from '@angular/core';
import { Perfil } from '../core/_models/perfil.model';
import { PerfilService } from './perfil.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LoadPermissionService } from "../core/_services/loadPermission.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil[];

  constructor(private perfilService: PerfilService,  private router: Router, private loadPermissionService: LoadPermissionService) { }

  delete(perfil: Perfil): void {
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
        this.perfilService.delete(perfil.id)
          .subscribe(response => {
              this.perfil = this.perfil.filter(cli => cli != perfil)
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
    this.perfilService.getPerfiles().subscribe(
    (perfil) => {this.perfil = perfil}
  );
  }

}
