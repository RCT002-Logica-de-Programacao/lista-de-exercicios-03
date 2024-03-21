function desenharArvore(numeroDeNos) {
    // Loop para cada linha da árvore
    for (let i = 1; i <= numeroDeNos; i++) {
        // Desenha os espaços em branco antes do galho
        let espacos = ' '.repeat(numeroDeNos - i);

        // Desenha o galho (um asterisco) repetido duas vezes para simular a largura
        let galho = '*'.repeat(i * 2 - 1);

        // Imprime a linha da árvore
        console.log(espacos + galho);
    }

    // Desenha o tronco da árvore
    let espacosTronco = ' '.repeat(numeroDeNos - 1);
    console.log(espacosTronco + '|');
    console.log(espacosTronco + '|');
}

// Chama a função para desenhar uma árvore com 5 galhos
desenharArvore(5);