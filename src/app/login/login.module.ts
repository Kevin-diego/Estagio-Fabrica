import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [TelaLoginComponent, FormLoginComponent, RecuperarSenhaComponent],
  imports: [
    CommonModule,
  
  ],
  exports:[TelaLoginComponent, FormLoginComponent, RecuperarSenhaComponent]
})
export class LoginModule { }
