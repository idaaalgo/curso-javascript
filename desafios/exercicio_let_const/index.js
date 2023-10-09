const nome = 'Eduardo';
const sobrenome = 'Idalgo';
const nomeCompleto  = nome + " " + sobrenome;
const idade = 19;
const alturaEmMetros = 1.81;
const pesoEmKg = 72;
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const imc = pesoEmKg / Math.pow(alturaEmMetros, 2);
const anoDeNascimento = anoAtual - idade;

console.log(`${nomeCompleto} Tem ${idade} anos, pesa ${pesoEmKg}Kg`);
console.log(`Tem ${alturaEmMetros.toFixed(2)} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);