import { Projetos } from './../../dominios/Projetos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from 'src/dominios/Usuario';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
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

  findAll(): Observable<Projetos[]>{//projetos ou arquivos
    return this.http.get<Projetos[]>(`${this.URL}${this.PROJETOS}`);
    }

    listarUsuario(): Observable<Usuario[]>{//projetos ou arquivos
    return this.http.get<Usuario[]>(`${this.URL}${this.USUARIO}`);
    }

    buscarPorNome(nome: string): Observable<string>{
      return this.http.get<string>(`${this.URL}${this.USUARIO}/${nome}`);
     }
     
     salvar(p: Projetos): Observable<Projetos>{
      return this.http.post<Projetos>(`${this.HOST}${this.PORTA_SERVICO}${this.PROJETOS}`,p);
     }
     
     atualizar(p: Projetos): Observable<Projetos>{
       return this.http.put<Projetos>(`${this.HOST}${this.PORTA_SERVICO}${this.PROJETOS}`,p);
      }
      deletar(idProjeto: number): Observable<string>{
     return this.http.delete<string>(`${this.HOST}${this.PORTA_SERVICO}${this.PROJETOS}/${idProjeto}`)
      }

    
      searchByName(nome: string): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${this.URL}${this.USUARIO}/${nome}`);
       }
}

