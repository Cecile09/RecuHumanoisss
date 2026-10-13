import { Funcionario } from "./funcionario";
import { Gerente } from "./gerente";
import { Vendedor } from "./vendedor";
import { Estagiario } from "./estagiario";

const gerente1 = new Gerente("Ana", 5000, "Tecnologia", "Carlos e Maria");
const gerente2 = new Gerente("Bruno", 6000, "Financeiro", "Lucas e Julia");

const vendedor1 = new Vendedor("Carlos", 2500, "blablabla", 0.10, "6x1");
const vendedor2 = new Vendedor("Maria", 2500, "avril lavigne", 0.15, "5x1");

const estagiario1 = new Estagiario("Lucas", 1200, 6767, 123); 
const estagiario2 = new Estagiario("Julia", 1200, 454, 321);

const listaFuncionarios: Funcionario[] = [
    gerente1, 
    gerente2, 
    vendedor1, 
    vendedor2, 
    estagiario1, 
    estagiario2
];

function calcularFolhaDePagamento(funcionarios: Funcionario[]): void {
    let totalSalarios = 0;

    for (const func of funcionarios) {
        totalSalarios += func.calcularSalario();
    }

    console.log(`O valor total da folha de pagamento é: R$ ${totalSalarios.toFixed(2)}`);
}

calcularFolhaDePagamento(listaFuncionarios);