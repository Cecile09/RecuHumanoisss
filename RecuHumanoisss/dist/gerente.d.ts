import { Funcionario } from "./funcionario";
export declare class Gerente extends Funcionario {
    protected nomeDoDepartamento: string;
    protected listaDeNomesDosFunc: string;
    constructor(nome: string, salarioBase: number, nomeDoDepartamento: string, listaDeNomesDosFunc: string);
    calcularSalario(): number;
}
//# sourceMappingURL=gerente.d.ts.map