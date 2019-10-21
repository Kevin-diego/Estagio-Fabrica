import { Pessoa } from './../../dominios/Pessoas';
import { Projetos } from './../../dominios/Projetos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  HOST: string;
  PORTA_SERVICO: string;
  PROJETOS:string = '/projetos';
  URL: string;
  // api : String = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/joao';//teste api
  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta
    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
    // this.api;//teste api
   }
   getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }

  findAll(): Observable<Projetos[]>{//projetos ou arquivos
    return this.http.get<Projetos[]>(`${this.URL}${this.PROJETOS}`);
    }

    // findTest(): Observable<Pessoa[]>{//projetos ou arquivos
    //   return this.http.get<Pessoa[]>(`${this.api}`);//teste api
      
}
// }//teste api
