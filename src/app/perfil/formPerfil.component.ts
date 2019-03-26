import { Component, OnInit } from '@angular/core';
import { Perfil } from '../core/_models/perfil.model';
import { PerfilService } from './perfil.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formPerfil',
  templateUrl: './formPerfil.component.html',
  styleUrls: ['./formPerfil.component.css']
})

export class FormPerfilComponent implements OnInit {
  private perfil: Perfil = new Perfil();
  constructor(private perfilService: PerfilService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarPerfiles();
  }

  cargarPerfiles(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.perfilService.getPerfil(id).subscribe( (perfil) => this.perfil = perfil )
      }
    })
  }

  create(): void {
    this.perfilService.create(this.perfil)
    .subscribe(perfil => {
        Swal.fire('Registro Creado', `Perfil ${perfil.descripcion} creado con éxito!`);
        this.router.navigate(['/perfil']);
      }
    );
  }

  update(): void {
    this.perfilService.update(this.perfil)
    .subscribe(perfil => {
      this.router.navigate(['/perfil']);
      Swal.fire('Registro Actualizado', `Perfil ${perfil.descripcion} actualizado con éxito!`);
    }) 
  }


}