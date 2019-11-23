import { Projetos } from './../../../dominios/Projetos';
import { ProjetoService } from './../projeto.service';
import { Router, ActivatedRoute } from '@angular/router';


import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-projeto',
  templateUrl: './form-projeto.component.html',
  styleUrls: ['./form-projeto.component.scss']
})
export class FormProjetoComponent implements OnInit {
 
  titulo:string = 'Cadastro de Projeto'; 
  lista: Projetos[];
  formulario: FormGroup;
  projeto: Projetos = new Projetos();
  mostarDialogo: boolean = false;

  constructor(private pj: ProjetoService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.configurarFormulario();
    this.listar();

     //exemplo de como pega o id:
     const id =  this.route.snapshot.paramMap.get('idProjeto');


     //exemplo de como pegar o obejeto:
     this.route.queryParams.subscribe(resp=>{
       if(resp.projeto){
         this.projeto = JSON.parse(resp.projeto);
     
       }
       
     });
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      versao: [null, Validators.required],
      descricao: [null, Validators.required],
      
    });
  }

  listar() {
    this.pj.findAll().subscribe(
            dadosDoServidor => {
        this.lista = dadosDoServidor;        
      }, error => {

      });
  }
  salvar() {
    this.pj.salvar(this.projeto).subscribe(
      dadosDoServidor => {

        Swal({
          type: 'success',
          title: "Salvo",
          text: "Projeto Salvo Com Sucesso!",
          showConfirmButton: false,
          timer: 2500
        });
        this.router.navigate(['/pesquisa-projeto']);
        
        this.formulario.reset();
      }, error => {
       if (error.ok == false && error.status == 409 ) {
          Swal({
            type: 'error',
            title: 'Atenção!',
            text: 'Projeto Duplicado, Já existe projeto com este nome!',
            
          }
          )
       }
        
       }
    );
  }
  atualiza(p: Projetos) {
    this.pj.atualizar(p).subscribe(
      dadosDoServido => {
        Swal({
          type: 'success',
          title: "Atualizado",
          text: "Registro Atualizado Com Sucesso!",
          showConfirmButton: false,
          timer: 2500
        });
        this.listar();
        this.mostarDialogo = false;
        this.router.navigate(['/pesquisa-projeto']);
      }, error => {

      }
    );
  }

  salvarOuAtualizar() {
    if (this.projeto.idProjeto) {
      this.atualiza(this.projeto);
   
    } else {
      this.salvar();
      
    }
  }
  voltar(){
    this.router.navigate(['pesquisa-projeto']);
  }

  chamarDialogo(p: Projetos) {
    this.projeto = p;
    this.mostarDialogo = true;
  }
}


