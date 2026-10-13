"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
const funcionario_1 = require("./funcionario");
class Vendedor extends funcionario_1.Funcionario {
    nomeDoDerpQueAtua;
    comissaoSobVendas;
    escalaDeTrab;
    constructor(nome, salarioBase, nomeDoDerpQueAtua, comissaoSobVendas, escalaDeTrab) {
        super(nome, salarioBase);
        this.nomeDoDerpQueAtua = nomeDoDerpQueAtua;
        this.comissaoSobVendas = comissaoSobVendas;
        this.escalaDeTrab = escalaDeTrab;
    }
    calcularSalario() {
        return this.salarioBase * 1.40;
    }
}
exports.Vendedor = Vendedor;
//# sourceMappingURL=vendedor.js.map