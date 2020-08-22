import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';

const cli1 = new Cliente("Rafael", 40404040);
const cli2 = new Cliente("João", 40404055);
const cli3 = new Cliente("Alice", 50404055);

const con1 = new Conta(111, cli1);
const con2 = new Conta(111);
const con3 = new Conta(114);

con2.cliente = cli3;
con3.cliente = cli2;

con1.depositar(1000);
con1.transferir(200, con2)

console.log(con1, con2, con3);