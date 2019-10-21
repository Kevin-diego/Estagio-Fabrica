import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaProjetoComponent } from './pesquisa-projeto/pesquisa-projeto.component';

@NgModule({
  declarations: [PesquisaProjetoComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[PesquisaProjetoComponent]
})
export class ProjetoModule { }
