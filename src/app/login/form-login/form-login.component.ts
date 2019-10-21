import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  [x: string]: any;

  constructor(
    private _route: Router
    ) { }

  ngOnInit() {
  }
  button2(): void {
  console.log('cliquei aqui');
    this._route.navigate(['/form-login']);
  }
}
