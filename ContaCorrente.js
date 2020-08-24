import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static _numeroDeContas = 0

    constructor(agencia, cliente) {

        super(agencia, cliente);
        ContaCorrente._numeroDeContas++;
        this._numero = ContaCorrente._numeroDeContas;

    }

    sacar(valor) {
        const taxa = 1.02;
        super._sacar(valor, taxa);
    }

}