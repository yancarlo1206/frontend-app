import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { UsuarioService } from './usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  private usuario: User = new User();
  constructor(private usuarioService: UsuarioService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (cliente) => this.cliente = cliente )
      }
    })
  }

  create(): void {
    this.usuarioService.create(this.usuario)
    .subscribe(usuario => {
        Swal.fire('Registro Creado', `Cliente ${usuario.nombre} creado con éxito!`);
        this.router.navigate(['/usuario']);
      //swal('Nuevo Cliente', `Cliente ${usuario.nombre} creado con éxito!`, 'success');
      }
    );

  }


}