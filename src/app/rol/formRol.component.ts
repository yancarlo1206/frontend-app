import { Component, OnInit } from '@angular/core';
import { Rol } from '../core/_models/rol.model';
import { RolService } from './rol.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formRol',
  templateUrl: './formRol.component.html',
  styleUrls: ['./formRol.component.css']
})

export class FormRolComponent implements OnInit {
  private rol: Rol = new Rol();
  constructor(private rolService: RolService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarRoles();
  }

  cargarRoles(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.rolService.getRol(id).subscribe( (rol) => this.rol = rol )
      }
    })
  }

  create(): void {
    this.rolService.create(this.rol)
    .subscribe(rol => {
        Swal.fire('Registro Creado', `Rol ${rol.descripcion} creado con éxito!`);
        this.router.navigate(['/rol']);
      }
    );
  }

  update(): void {
    this.rolService.update(this.rol)
    .subscribe(rol => {
      this.router.navigate(['/rol']);
      Swal.fire('Registro Actualizado', `Rol ${rol.descripcion} actualizado con éxito!`);
    }) 
  }


}