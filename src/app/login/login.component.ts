import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../login/login.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor( private authService: AuthService) { }

  Login(){
    //swal("prueba", "prueba", "success");
    /*Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Cool'
    });*/
    console.log(" Estas logueandote ");
    this.authService.login(this.user.usuario, this.user.clave);
  }

  ngOnInit() {
  }

}
