import { Funcionario } from "./funcionario";
export declare class Vendedor extends Funcionario {
    protected nomeDoDerpQueAtua: string;
    protected comissaoSobVendas: number;
    protected escalaDeTrab: string;
    constructor(nome: string, salarioBase: number, nomeDoDerpQueAtua: string, comissaoSobVendas: number, escalaDeTrab: string);
    calcularSalario(): number;
}
//# sourceMappingURL=vendedor.d.ts.map