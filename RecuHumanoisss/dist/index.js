"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerente_1 = require("./gerente");
const vendedor_1 = require("./vendedor");
const estagiario_1 = require("./estagiario");
const gerente1 = new gerente_1.Gerente("Ana", 5000, "Tecnologia", "Carlos e Maria");
const gerente2 = new gerente_1.Gerente("Bruno", 6000, "Financeiro", "Lucas e Julia");
const vendedor1 = new vendedor_1.Vendedor("Carlos", 2500, "blablabla", 0.10, "6x1");
const vendedor2 = new vendedor_1.Vendedor("Maria", 2500, "avril lavigne", 0.15, "5x1");
const estagiario1 = new estagiario_1.Estagiario("Lucas", 1200, 6767, 123);
const estagiario2 = new estagiario_1.Estagiario("Julia", 1200, 454, 321);
const listaFuncionarios = [
    gerente1,
    gerente2,
    vendedor1,
    vendedor2,
    estagiario1,
    estagiario2
];
function calcularFolhaDePagamento(funcionarios) {
    let totalSalarios = 0;
    for (const func of funcionarios) {
        totalSalarios += func.calcularSalario();
    }
    console.log(`O valor total da folha de pagamento é: R$ ${totalSalarios.toFixed(2)}`);
}
calcularFolhaDePagamento(listaFuncionarios);
//# sourceMappingURL=index.js.map