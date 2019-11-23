import { Projetos } from './../../dominios/Projetos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from 'src/dominios/Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  HOST: string;
  PORTA_SERVICO: string;
  PROJETOS:string = '/projetos';
  USUARIO:string = '/usuario';
  URL: string;
  
  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta
    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
   }
   getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }
  listarUsuario(): Observable<Usuario[]>{//projetos ou arquivos
    return this.http.get<Usuario[]>(`${this.URL}${this.USUARIO}`);
    }

    salvar(u: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.HOST}${this.PORTA_SERVICO}${this.USUARIO}`,u);
     }
}
