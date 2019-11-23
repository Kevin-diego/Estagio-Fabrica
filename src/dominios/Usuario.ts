import { Login } from './Login';
import { Projetos } from './Projetos';
export class Usuario{

    idUsuario: number;
    nome: string;
    login: Login;
    projetos: Projetos[]=[];
    constructor(){

    }
}