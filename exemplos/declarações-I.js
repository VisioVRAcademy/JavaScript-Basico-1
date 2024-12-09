// DECLARAÇÕES ----------------------------------------------------------------

// Exemplo 1 - Bloco if
if (true) {
    console.log("Isso não é uma expressão");
}

// Exemplo 2 - Tentativa de armazenar bloco if como valor
// var resultado = if (true) { "teste" }; // Erro de sintaxe

// Exemplo 3 - Bloco vazio
// Um bloco vazio ou definido sem motivo também não é uma expressão
{
    var y = 10;
}


// DECLARAÇÕES UTILIZANDO EXPRESSÕES ------------------------------------------

// Exemplo 1 - Bloco if utilizando expressão em sua condição
if (5 > 2) {
    // Aqui, "5 > 2" é uma expressão usada pela declaração if
    console.log("Isso é uma declaração que usa uma expressão");
}

// Exemplo 2 - Bloco switch utilizando expressão em sua condição
switch (x) {
    case 1 + 2: // Aqui, "1 + 2" é uma expressão usada pela declaração switch
        console.log("É igual a 3");
        break;
}

// Exemplo 3 - Loop for utilizando expressões
for (let i = 0; i < 5; i++) {
    // Aqui, "let i = 0", "i < 5" e "i++" são expressões usadas pela declaração for
    if (i === 3) {
        break; // Não é uma expressão
    }
}


// DECLARAÇÕES QUE GERAM EXPRESSÕES -------------------------------------------

// Exemplo 1 - Declaração de variável
var x; // Aqui, a declaração var gera uma variável, que é uma expressão
console.log(typeof x); // Nesse caso, a variável não tem nada armazenado. Logo, sua expressão é do tipo "undefined"

// Exemplo 2 - Declaração de variável com atribuição
var y = 10; // Aqui, a declaração var gera uma variável e atribui um valor a ela
console.log(y); // A variável gerada á uma expressão (nesse caso, do tipo número com valor igual a 10)
console.log(y = 10); // Mas a atribuição em si também é uma expressão. Seu valor é o valor atribuído à variável
