import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta {

    static _numeroDeContas = 0

    constructor(agencia, cliente, saldo) {

        super(agencia, cliente);
        ContaPoupanca._numeroDeContas++;
        this._numero = ContaPoupanca._numeroDeContas;
        this._saldo = saldo;
    }
    sacar(valor) {
        const taxa = 1.3;
        super._sacar(valor, taxa);
    }
}