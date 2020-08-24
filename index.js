import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cli1 = new Cliente("Ricardo", 40404040);
const cli2 = new Cliente("João", 40404055);
const cli3 = new Cliente("Alice", 50404055);

const con1 = new ContaCorrente(111, cli1);
const con2 = new ContaCorrente(111);
const con3 = new ContaPoupanca(114, cli2, 100);

con2.cliente = cli3

con1.depositar(1000);
con1.transferir(200, con3)

console.log(con1, con2, con3);