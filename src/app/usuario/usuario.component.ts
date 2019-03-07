import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { LoadPermissionService } from "../core/_services/loadPermission.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: User[];

  constructor(private usuarioService: UsuarioService,  private router: Router, private loadPermissionService: LoadPermissionService) { }

  delete(usuarioId: string): void {

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
        this.usuarioService.delete(usuarioId)
          .subscribe(usuario => {
              this.router.navigate(['/home']);
            }
          );
        Swal.fire(
          'Borrado!',
          'El registro ha sido borrado.',
          'success'
        )
      }
    })

  }

  ngOnInit() {
    this.loadPermissionService.loadPermission();
    this.usuarioService.getUsuarios().subscribe(
    (usuarios) => {this.usuario = usuarios}
  );
  }

}
