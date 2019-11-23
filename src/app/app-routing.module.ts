import { CommonModule } from '@angular/common';
import { ChildActivationStart } from '@angular/router';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { PesquisaProjetoComponent } from './projeto/pesquisa-projeto/pesquisa-projeto.component';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { FormProjetoComponent } from './projeto/form-projeto/form-projeto.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tela-login' },
    { path: 'tela-login', pathMatch: 'full', component: TelaLoginComponent},
    { path: 'pesquisa-projeto', pathMatch: 'full',component: PesquisaProjetoComponent},
    { path: 'recuperar-senha', pathMatch: 'full',component: RecuperarSenhaComponent},
    { path: 'form-login', pathMatch: 'full',component: FormLoginComponent},
    { path: 'pesquisa-projeto/form-projeto', pathMatch: 'full',component: FormProjetoComponent},
    {
      path: 'pesquisa-projeto/form-projeto/:idProjeto',component: FormProjetoComponent,
      },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
