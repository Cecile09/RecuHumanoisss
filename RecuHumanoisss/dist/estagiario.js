"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estagiario = void 0;
const funcionario_1 = require("./funcionario");
class Estagiario extends funcionario_1.Funcionario {
    salarioFixo;
    quantitativoDeHrsDeTrabPorDia;
    constructor(nome, salarioBase, salarioFixo, quantitativoDeHrsDeTrabPorDia) {
        super(nome, salarioBase);
        this.salarioFixo = salarioFixo;
        this.quantitativoDeHrsDeTrabPorDia = quantitativoDeHrsDeTrabPorDia;
    }
    calcularSalario() {
        return this.salarioBase * 1.30;
    }
}
exports.Estagiario = Estagiario;
//# sourceMappingURL=estagiario.js.map