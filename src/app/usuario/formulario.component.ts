import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  private usuario: User = new User();
  constructor(private usuarioService: UsuarioService,
  private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    this.usuarioService.create(this.usuario)
    .subscribe(usuario => {
        Swal.fire('Registro Creado');
        this.router.navigate(['/usuario']);

      //swal('Nuevo Cliente', `Cliente ${usuario.nombre} creado con éxito!`, 'success');
      }
    );
    /*
    console.log('Clicked!');
    console.log(this.cliente);
    */
  }


}