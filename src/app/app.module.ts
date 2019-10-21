import { ChildActivationStart, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PesquisaProjetoComponent } from './projeto/pesquisa-projeto/pesquisa-projeto.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProjetoModule } from './projeto/projeto.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent

  ],
  
  imports: [
    BrowserModule,
    LoginModule,
    ProjetoModule,
    HttpClientModule,
    AppRoutingModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule]
})
export class AppModule { }
