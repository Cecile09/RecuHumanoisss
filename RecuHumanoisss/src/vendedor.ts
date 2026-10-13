import { Funcionario } from "./funcionario";

export class Vendedor extends Funcionario{
    protected nomeDoDerpQueAtua: string
    protected comissaoSobVendas: number
    protected escalaDeTrab: string

    constructor(nome: string, salarioBase: number, nomeDoDerpQueAtua: string, comissaoSobVendas: number, escalaDeTrab: string){
        super(nome, salarioBase);
        this.nomeDoDerpQueAtua = nomeDoDerpQueAtua
        this.comissaoSobVendas = comissaoSobVendas
        this.escalaDeTrab = escalaDeTrab
    }
    calcularSalario(): number {
        return this.salarioBase * 1.40
    }













}