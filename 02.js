//Exemplo 2: Semaforo
const prompt = require('prompt-sync')({sigint : true})
var corLuz;

corLuz = prompt("Digite o atual status da luz do semaforo: ");
corLuz = corLuz.toLowerCase();
if (corLuz === 'verde') {
    console.log("Siga, pois o sinal se apresenta", corLuz)
} else if (corLuz === 'amarelo') {
    console.log("ATENCAO, pois o sinal se apresenta", corLuz)
} else if (corLuz === 'vermelho') {
    console.log("Pare, pois o sinal se apresenta", corLuz)
} else {
    console.log(corLuz, " nao eh uma cor valida. As cores validas sao verde, amarelo, e vermelho");
}


