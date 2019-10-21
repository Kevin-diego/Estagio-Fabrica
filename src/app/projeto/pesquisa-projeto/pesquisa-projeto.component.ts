import { Pessoa } from './../../../dominios/Pessoas';
import { Projetos } from './../../../dominios/Projetos';
import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-pesquisa-projeto',
  templateUrl: './pesquisa-projeto.component.html',
  styleUrls: ['./pesquisa-projeto.component.scss']
})
export class PesquisaProjetoComponent implements OnInit {

  // arquivos = [
  //   {id: 1, nome: "RepositorioUnidesc", autor: "Kevin", descricao: "Projeto funcionandoajsdhajsdhjashdjhasdjh", versao: "1.0", dataCriacao: "12/12/12", dataUpdate: "13/13/13"},
  //   {id: 2, nome: "UnidescLocaliza", autor: "Marcos", descricao: "Projetoaklsndkasdkajskdjskdjskd", versao: "1.5", dataCriacao: "12/12/13", dataUpdate: "14/13/13"},
  //   {id: 2, nome: "UnidescLocaliza", autor: "Marcos", descricao: "Projetoaklsndkasdkajskdjskdjskd", versao: "1.5", dataCriacao: "12/12/13", dataUpdate: "14/13/13"},
  //   {id: 2, nome: "UnidescLocaliza", autor: "Marcos", descricao: "Projetoaklsndkasdkajskdjskdjskd", versao: "1.5", dataCriacao: "12/12/13", dataUpdate: "14/13/13"},
  //   {id: 2, nome: "UnidescLocaliza", autor: "Marcos", descricao: "Projetoaklsndkasdkajskdjskdjskd", versao: "1.5", dataCriacao: "12/12/13", dataUpdate: "14/13/13"}
  // ]
  listaProjetos: Projetos[]=[];
  // pessoas: Pessoa[]=[];//teste api
  constructor( private ps: ProjetoService){

   }

  ngOnInit() {
    // this.findAl();//teste da api
    this.findAll();
    
    
    
  }


  findAll(){
    this.ps.findAll().subscribe(dadosDoServidor=>{
      this.listaProjetos = dadosDoServidor;  
      console.log( this.listaProjetos);
      
    }, error=>{});
    }
  
  // findAl(){ //teste da api
  //   this.ps.findTest().subscribe(dadosDoServidor=>{
  //     this.pessoas = dadosDoServidor;  
  //     console.log(this.pessoas);
  //   }, error=>{});
  //   }
}
