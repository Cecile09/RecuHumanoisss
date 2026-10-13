import { Funcionario } from "./funcionario";
export declare class Estagiario extends Funcionario {
    protected salarioFixo: number;
    protected quantitativoDeHrsDeTrabPorDia: number;
    constructor(nome: string, salarioBase: number, salarioFixo: number, quantitativoDeHrsDeTrabPorDia: number);
    calcularSalario(): number;
}
//# sourceMappingURL=estagiario.d.ts.map