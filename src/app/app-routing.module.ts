import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioComponent } from './usuario/formulario.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService as AuthGuard, RoleGuardService, NoAuthGuardService as NoAuthGuard } from './core';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
	{path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
	{path: 'usuario', 
			component: UsuarioComponent,
			canActivate: [RoleGuardService],
      		data: {
        		expectedRole: 'ROLE_OTRO'
      		},
      		runGuardsAndResolvers: 'always'
	},
	{path: 'login', component: LoginComponent, canActivate : [NoAuthGuard]},
	{path: 'usuarios/formulario', component: FormularioComponent },
	{path: 'usuarios/formulario/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
