import { Login } from './../../../dominios/Login';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/dominios/Usuario';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {
  
  listarUsuarios: Usuario[]=[];
  usuario: Login;
  formulario: FormGroup;
email: string ="";
senha: string = "";
  constructor(
    private _route: Router,
    private ls: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.configurarFormulario();
    this.listarUsuario();
  }

  // configurarFormulario() {
  //   this.formulario = this.formBuilder.group({
  //     email: [null, Validators.required],
  //     senha: [null, Validators.required],
      
  //   });
  // }

 
  listarUsuario(){
    this.ls.listarUsuario().subscribe(dadosDoServidor=>{
      this.listarUsuarios = dadosDoServidor; 
    }, error=>{});
  }

  buttonEntar(email: String, senha: string): void {
    
    console.log('cliquei aqui');
    
    let lEmail = email;    
    let lSenha = senha;
    
    for (let index = 0; index < this.listarUsuarios.length; index++) {
      const element = this.listarUsuarios[index];
      let existeUsuario =false;
      if (lEmail == element.login.email && lSenha == element.login.senha) {
        this._route.navigate(['/pesquisa-projeto']);
        return
      
      
     }else if( (lEmail == null || lEmail == undefined ||lEmail == "") && (lSenha == null || lSenha == undefined ||lEmail == "")){
      Swal({
        type: 'info',
        title: 'Oops...',
        text: 'Preencha email e senha',
        
      });

     }else{
        
        Swal({
          type: 'info',
          title: 'Oops...',
          text: 'Email ou Senha incorreto',
          
        });

      }
    }
    
    
  }

  buttonRecuperar(): void {
    console.log('cliquei aqui');
    this._route.navigate(['/recuperar-senha']);
  }
  
  buttonForm(): void {
    console.log('cliquei aqui');
    this._route.navigate(['/form-login']);

  }
  
}
