import { Cliente } from "./Cliente.js";

export class Conta {

    constructor(agencia, cliente) {
        if (this.constructor == Conta) throw new Error('Esta classe é Abstrata');
        if (!(cliente instanceof Cliente)) throw new Error('Deve sempre receber uma instância da classe Cliente');
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;

    }

    sacar(valor) {
        throw new Error("Este método é abstrato");
    }

    _sacar(valor, taxa) {
        if (valor <= 0) return;
        if (this._saldo < valor * taxa) return;
        this._saldo -= valor * taxa;
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this._sacar(valor, 1);
        if (valorSacado != undefined) conta.depositar(valorSacado); // Porque aqui não funciona com typeof?  
        return
    }

    // geters

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get saldo() {
        return this._saldo;
    }

    get cliente() {
        return this._cliente;
    }

    get numeroDeContas() {
        return Conta._numeroDeContas
    }

    //seters

    set cliente(cliente) {

        if (!(cliente instanceof Cliente)) return;
        this._cliente = cliente;

    }
    set agencia(agencia) {

        if (typeof this._agencia != undefined) {
            console.log("\x1b[31m", `Agência já está definida: ${this._agencia} \n`, "\x1b[0m");
            return;
        }
        this._agencia = agencia;
    }

}