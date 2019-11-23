import { element } from 'protractor';
import { Usuario } from 'src/dominios/Usuario';

import { Projetos } from './../../../dominios/Projetos';
import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa-projeto',
  templateUrl: './pesquisa-projeto.component.html',
  styleUrls: ['./pesquisa-projeto.component.scss']
})
export class PesquisaProjetoComponent implements OnInit {
  listarUsuarioProjeto: Projetos[]=[];
  listaProjetos: Projetos[]=[];
  listarUsuarios: Usuario[]=[];
  projeto: Projetos = new Projetos();
  nome: string = "";
  

  constructor( private ps: ProjetoService, private route: ActivatedRoute, private router: Router){

   }

  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario(){
    this.ps.listarUsuario().subscribe(dadosDoServidor=>{
      this.listarUsuarios = dadosDoServidor;

    }, error=>{});
  }

  findAll(){
    this.ps.findAll().subscribe(dadosDoServidor=>{
      this.listaProjetos = dadosDoServidor;
    }, error=>{});
    }
  
    excluirPorId(id: number): string {
      let resposta: string;
  
      this.ps.deletar(id).subscribe(dadosDoServidor => {
        Swal({
  
          type: 'success',
          text: 'Deletado',
          title: 'Projeto Excluido Com Sucesso!',
          showConfirmButton: false,
          timer: 2500
        })
        this.listarUsuario();
      }, error => {
      });
      return resposta;
    }
  
  
    modalExcluir(id: number) {
      Swal({
        title: "<strong>Atenção</strong>",
        type: "warning",
        html: "<b> Tem certeza que desaja excluir o Projeto?",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: "Não",
        cancelButtonAriaLabel: "Thumbs down"
  
      }).then(ok => {
        if (ok.value) {
          this.excluirPorId(id);
        }
      });
    }
  
    chamarFormulario(p: Projetos) { 
           this.projeto = p;
      this.router.navigate(['pesquisa-projeto/form-projeto',this.projeto.idProjeto],{
        queryParams: { nome: 'Kevin ', projeto: JSON.stringify(p)},
        skipLocationChange: true
      });
    }

    searchByName(){
      this.ps.searchByName(this.nome).subscribe(dadosDoServidor=>{
            
      this.listarUsuarios = dadosDoServidor;
      },
        error=>{});
    
    }

    buttonFormProjeto(): void {
      this.router.navigate(['/pesquisa-projeto/form-projeto']);  
    }
}
