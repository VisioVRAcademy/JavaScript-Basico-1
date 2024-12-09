// MENU UTILIZANDO A ESTRUTURA DO-WHILE ---------------------------------------

// Exemplo 1 - Menu de opções
const prompt = require("prompt-sync")({ sigint: true });

var escolha;

do {
    // Exibindo a mensagem inicial do menu
    console.log("Menu de Opções:");
    console.log("1. Exibir Olá!");
    console.log("2. Exibir Data e Hora");
    console.log("3. Exibir um Número Aleatório");
    console.log("4. Sair");

    // Pedindo a escolha do usuário
    escolha = parseInt(prompt("Escolha uma opção (1-4): "));

    // Realizando ações conforme a escolha do usuário
    switch (escolha) {
        case 1:
            console.log("Olá, Mundo!");
            break;
        case 2:
            console.log("Data e Hora Atual: " + new Date());
            break;
        case 3:
            console.log(
                "Número Aleatório: " + Math.floor(Math.random() * 100) + 1
            );
            break;
        case 4:
            console.log("Saindo... Até logo!");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
} while (escolha !== 4); // O loop continua até o usuário escolher a opção 4 (Sair)
