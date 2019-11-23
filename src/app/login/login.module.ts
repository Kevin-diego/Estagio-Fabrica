import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [TelaLoginComponent, FormLoginComponent, RecuperarSenhaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  exports:[TelaLoginComponent, FormLoginComponent, RecuperarSenhaComponent],
  providers:[LoginService]
})
export class LoginModule { }
