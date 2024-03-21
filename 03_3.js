// Exercicio 3.3
const prompt = require('prompt-sync')({sigint : true});
horario = prompt("Digite um horario inteiro entre 0 e 24, inclusive: ");
horario = parseInt(horario);

if (horario>=0 && horario <=24) {
    var turno = (horario < 12) ? "matutino" : (horario>=12 && horario <18 ? "tarde" : "noite");
    console.log(turno);
    console.log("O turno referente ao horario fornecido eh:", turno)
} else {
    console.log("Valor de horario nao valido, ele deve ser entre 0 e 24, inclusive");
}