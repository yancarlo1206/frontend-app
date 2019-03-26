import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { FormularioComponent } from './usuario/formulario.component';
import { FormUsuarioRolComponent } from './usuario/formUsuarioRol.component';

import { RolComponent } from './rol/rol.component';
import { FormRolComponent } from './rol/formRol.component';

import { PerfilComponent } from './perfil/perfil.component';
import { FormPerfilComponent } from './perfil/formPerfil.component';

import { LoginComponent } from './login/login.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CoreModule, AuthInterceptor } from "./core/";

import { NgxPermissionsModule } from 'ngx-permissions';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    FormularioComponent,
    RolComponent,
    FormRolComponent,
    PerfilComponent,
    FormPerfilComponent,
    FormUsuarioRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    NgxPermissionsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
