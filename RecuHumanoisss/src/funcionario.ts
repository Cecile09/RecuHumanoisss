
export abstract class Funcionario{ 
    protected nome: string 
    protected salarioBase: number

    constructor(nome: string, salarioBase: number){
        this.nome = nome
        this.salarioBase = salarioBase
    }
    abstract calcularSalario(): number; 
    


}
