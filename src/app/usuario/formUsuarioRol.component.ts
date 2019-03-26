import { Component, OnInit } from '@angular/core';
import { Rol } from '../core/_models/rol.model';
import { RolService } from '../rol/rol.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formUsuarioRol',
  templateUrl: './formUsuarioRol.component.html',
  styleUrls: ['./formUsuarioRol.component.css']
})

export class FormUsuarioRolComponent implements OnInit {
  rol: Rol[];
  constructor(private rolService: RolService,
  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.rolService.getRoles().subscribe(
      (rol) => {this.rol = rol}
    );
  }

}