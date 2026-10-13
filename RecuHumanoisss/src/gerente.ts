import { Funcionario } from "./funcionario"

export class Gerente extends Funcionario{
   protected nomeDoDepartamento: string
   protected listaDeNomesDosFunc: string

   constructor(nome: string, salarioBase: number, nomeDoDepartamento: string, listaDeNomesDosFunc:string){
    super(nome, salarioBase ); // chama o constructor da classe mãe
        this.nomeDoDepartamento = nomeDoDepartamento
        this.listaDeNomesDosFunc = listaDeNomesDosFunc
   }
    //cumprimento do contrato da classe mãe
   calcularSalario(): number {
       return this.salarioBase * 1.20 //o bonus de 20%
   }

}