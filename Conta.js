import { Cliente } from "./Cliente.js";
export class Conta {

    _agencia;
    _numero;
    _saldo = 0;
    _cliente;
    static _numeroDeContas = 0

    constructor(agencia, cliente) {
        Conta._numeroDeContas++;
        this._agencia = agencia;
        this._numero = Conta._numeroDeContas;
        this._cliente = cliente;
    }


    sacar(valor) {
        if (valor <= 0) return;
        if (this._saldo < valor) return;
        this._saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
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
    set agencia(agencia) {

        if (typeof this._agencia != undefined) {
            console.log("\x1b[31m", `Agência já está definida: ${this._agencia} \n`, "\x1b[0m");
            return;
        }
        this._agencia = agencia;
    }

    set cliente(cliente) {
        if (!(cliente instanceof Cliente)) return

        if (this._cliente != undefined) { // Porque aqui não funciona com typeof?
            console.log("\x1b[31m", `Cliente já está definido: ${JSON.stringify(this._cliente)} \n`, "\x1b[0m");
            return;
        }
        this._cliente = cliente;
    }
}