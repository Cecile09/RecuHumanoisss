"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const funcionario_1 = require("./funcionario");
class Gerente extends funcionario_1.Funcionario {
    nomeDoDepartamento;
    listaDeNomesDosFunc;
    constructor(nome, salarioBase, nomeDoDepartamento, listaDeNomesDosFunc) {
        super(nome, salarioBase); // chama o constructor da classe mãe
        this.nomeDoDepartamento = nomeDoDepartamento;
        this.listaDeNomesDosFunc = listaDeNomesDosFunc;
    }
    //cumprimento do contrato da classe mãe
    calcularSalario() {
        return this.salarioBase * 1.20; //o bonus de 20%
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=gerente.js.map