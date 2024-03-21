// Exemplo 1: Avaliacao de faixa etaria
const prompt = require('prompt-sync')({ sigint: true });
var idade;

idade = prompt("Digite uma idade entre 0 e 120: ");
idade = parseInt(idade);
if (idade < 18) {
    console.log("A pessoa eh menor de idade e jovem");
}
else if (idade < 60) {
    console.log("A pessoa eh maior de idade e jovem");
}
else if (idade < 100) {
    console.log("A pessoa eh idosa")
}
   
else {
    console.log("A pessoa centenaria tem muita historia para contar")
}
