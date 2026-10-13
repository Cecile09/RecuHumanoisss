import { Funcionario } from "./funcionario";

export class Estagiario extends Funcionario{
    protected salarioFixo: number
    protected quantitativoDeHrsDeTrabPorDia: number

    constructor(nome: string, salarioBase: number, salarioFixo: number, quantitativoDeHrsDeTrabPorDia: number ){
        super(nome, salarioBase);
        this.salarioFixo = salarioFixo
        this.quantitativoDeHrsDeTrabPorDia = quantitativoDeHrsDeTrabPorDia
    }
   calcularSalario(): number {
        return this.salarioBase * 1.30
   }



}