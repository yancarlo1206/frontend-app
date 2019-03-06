import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

import { /*HTTP_INTERCEPTORS, */HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CoreModule } from "./core/core.module";

import { AuthGuardService } from './core/_guards/auth-guard.service';
import { RoleGuardService } from './core/_guards/role-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [AuthGuardService, RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
