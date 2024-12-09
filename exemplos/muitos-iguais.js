// OS MUITOS IGUAIS -----------------------------------------------------------

// Exemplo 1 - Um único igual para atribuição
var x = 5; // Atribuindo o valor 5 à variável x

// Exemplo 2 - Um igual duplo para comparação
if (x == 5) {
    // Agora que o operador de comparação (==) é utilizado, o problema é resolvido
    console.log("Entrou no if!");
} else {
    console.log("Não entrou no if!");
}

// Exemplo 3 - Um igual duplo realizando conversão de tipo
if (x == "5") {
    // Agora que o operador de comparação (==) é utilizado, o problema é resolvido
    console.log("Entrou no if!");
} else {
    console.log("Não entrou no if!");
}

// Exemplo 4 - Um igual triplo para comparação estrita
if (x === "5") {
    // O operador de comparação estrita (===) compara os valores (5 e 5) e os tipos (número e string)
    console.log("Entrou no if!");
} else {
    console.log("Não entrou no if!");
}

// Exemplo 5 - Utilizando igual de atribuição onde espera-se uma comparação
if (x = 10) {
    // Confusão! Aqui estamos usando o operador de atribuição (=) em vez de comparação (==)
    console.log("Entrou no if!"); // O código entrará no if, pois x = 10 retorna 10, que é truthy
} else {
    console.log("Não entrou no if!");
}

if (x = 0) {
    console.log("Entrou no if!"); // O código NÃO entrará no if, pois x = 0 retorna 0, que é falsy
} else {
    console.log("Não entrou no if!");
}

// Exemplo 6 - Exemplo de uso do operador de atribuição (=) dentro de um bloco if
var usuario = null;

// Prévia de uma função que retorna um nome de usuário
function obterUsuario() {
    return "John";
}

if (usuario = obterUsuario()) {
    console.log("Olá, " + usuario + "!");
} else {
    console.log("Nenhum usuário encontrado");
}
