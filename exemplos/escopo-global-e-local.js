// ESCOPO GLOBAL E LOCAL ------------------------------------------------------

// Exemplo 1 - Escopo global
var nome = "João"; // Variável global

function cumprimentar() {
    console.log("Olá, " + nome);
}

cumprimentar(); // Olá, João
console.log(nome); // João

// Exemplo 2 - Escopo local
function exemploLocal() {
    var mensagem = "Esta é local";
    console.log(mensagem); // Esta é local
}

exemploLocal();
console.log(mensagem); // Erro: mensagem não está definida
