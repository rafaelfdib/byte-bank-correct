export class Cliente {

    _nome;
    _cpf;
    _endereco;

    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }

    //geters

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }

    //seters

    set nome(nome) {

        if (typeof this._nome != undefined) {
            console.log("\x1b[31m", `Nome já está definido: ${this._nome} \n`, "\x1b[0m");
            return;
        }
        this._nome = nome;
    }

}