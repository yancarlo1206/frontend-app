import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService as AuthGuard } from './core/_guards/auth-guard.service';
import { RoleGuardService } from './core/_guards/role-guard.service';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'usuario', 
			component: UsuarioComponent,
			canActivate: [RoleGuardService],
      		data: {
        		expectedRole: 'ROLE_OTRO'
      		}
	},
	{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
