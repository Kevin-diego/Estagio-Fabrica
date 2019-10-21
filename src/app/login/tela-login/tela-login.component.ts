import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit() {
  }

  button(): void {
    console.log('cliquei aqui');
    this._route.navigate(['/pesquisa-projeto']);
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
