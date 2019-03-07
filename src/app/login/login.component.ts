import { Component, OnInit } from '@angular/core';
import { User } from '../core/_models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../login/login.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private router: Router, private loginService: LoginService) { }

  Login(){
    //swal("prueba", "prueba", "success");
    /*Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Cool'
    });*/
    console.log(" Estas logueandote ");
    this.loginService.login(this.user.usuario, this.user.clave);
    //this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
