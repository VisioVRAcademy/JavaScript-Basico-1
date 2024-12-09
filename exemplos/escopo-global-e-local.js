// ESCOPO GLOBAL E LOCAL ------------------------------------------------------

// Exemplo 1 - Escopo global
let nome = "João"; // Variável no escopo global

function saudacao() {
    console.log(nome); // A variável 'nome' pode ser acessada dentro da função
}

saudacao(); // Imprime "João"

// Exemplo 2 - Escopo local
function saudacao() {
    let nome = "João"; // Variável no escopo local
    console.log(nome); // A variável 'nome' só pode ser acessada dentro desta função
}

saudacao(); // Imprime "João"
console.log(nome); // Erro! 'nome' não está acessível fora da função
