import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit, OnDestroy {
  [x: string]: any;

  constructor(
    private _route: Router
    ) { }

  ngOnInit(): void {
    console.log('entrei aqui em recuperar senha');
  }

  ngOnDestroy(): void {
    console.log('sair do componente');
  }
  buttonRecuperar(): void {
    console.log('cliquei aqui');
    this._route.navigate(['/recuperar-senha']);
  }
}
