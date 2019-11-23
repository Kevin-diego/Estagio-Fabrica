import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProjetoComponent } from './pesquisa-projeto/pesquisa-projeto.component';
import { FormProjetoComponent } from './form-projeto/form-projeto.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjetoService } from './projeto.service';
import { FormsModule }   from '@angular/forms';



@NgModule({
  declarations: [PesquisaProjetoComponent, FormProjetoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[PesquisaProjetoComponent, FormProjetoComponent],
  providers:[ProjetoService]
})
export class ProjetoModule { }
