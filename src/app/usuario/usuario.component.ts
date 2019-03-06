import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { UsuarioService } from './usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: User[];

  constructor(private usuarioService: UsuarioService,  private router: Router) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
    (usuarios) => {this.usuario = usuarios}
  );
  }

}
