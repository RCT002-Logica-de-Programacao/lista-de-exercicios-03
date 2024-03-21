// Exemplo 3.2
const prompt = require('prompt-sync')({sigint : true});
horario = prompt("Digite um horario inteiro entre 0 e 24: ");
horario = parseInt(horario);
var turno = (horario < 12) ? "matutino" : (horario>=12 && horario <18 ? "tarde" : "noite");
console.log(turno);
console.log("O turno referente ao horario fornecido eh:", turno);