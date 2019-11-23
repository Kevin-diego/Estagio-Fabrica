import { Usuario } from 'src/dominios/Usuario';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  formulario: FormGroup;
  constructor(
    private _route: Router,
    private ls: LoginService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      
    });
  }
  salvar() {
    console.log("cliquei");
    
    this.ls.salvar(this.usuario).subscribe(
      dadosDoServidor => {

        Swal({
          type: 'success',
          title: "Salvo",
          text: "Projeto Salvo Com Sucesso!",
          showConfirmButton: false,
          timer: 2500
        });
        
        this.formulario.reset();
        this.buttonVoltar();
      }, error => {
       if (error.ok == false && error.status == 409 ) {
          Swal({
            type: 'error',
            title: 'Atenção!',
            text: 'Usuario Duplicado, Já existe projeto com este nome!',
            
          }
          )
       }
        
       }
    );
  }
  button2(): void {
  console.log('cliquei aqui');
    this._route.navigate(['/form-login']);
  }
  buttonVoltar(): void {
    console.log('cliquei aqui');
    this._route.navigate(['/tela-login']);
  }
}
