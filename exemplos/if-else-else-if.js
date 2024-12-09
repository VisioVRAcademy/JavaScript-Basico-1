// ESTRUTURAS IF, ELSE E ELSE IF ----------------------------------------------

// Exemplo 1 - Blocos de declarações condicionais
if (17 > 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

if (17 == 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

if (17 > 18 || 17 == 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

if (17 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

if (17 >= 18) {
    console.log("Você é maior de idade.");
} else if (75 >= 18) {
    console.log("Você é muito velho para estar aqui.");
} else {
    console.log("Você é menor de idade.");
}

// Exemplo 2 - Declarações condicionais com uma linha única de código
if (true) console.log("Verdadeiro.");

if (true) console.log("Verdadeiro.");
else console.log("Falso.");

if (false) console.log("Falso.");
else if (true) console.log("Verdadeiro.");
else console.log("Falso.");

// if (true)
//     console.log("Verdadeiro.");
//     console.log("Outra linha.");
// else console.log("Falso."); // Erro de sintaxe
