// VALORES FALSY --------------------------------------------------------------

// Exemplo 1 - O valor 0
if (0) {
    console.log("Isso não será exibido");
} else {
    console.log("0 é um valor falsy");
}
// Saída: "0 é um valor falsy"

// Exemplo 2 - O valor -0
if (-0) {
    console.log("Isso não será exibido");
} else {
    console.log("-0 é um valor falsy");
}
// Saída: "-0 é um valor falsy"

// Exemplo 3 - Uma string vazia
if ("") {
    console.log("Isso não será exibido");
} else {
    console.log("Uma string vazia é um valor falsy");
}
// Saída: "Uma string vazia é um valor falsy"

// Exemplo 4 - O valor null
if (null) {
    console.log("Isso não será exibido");
} else {
    console.log("null é um valor falsy");
}
// Saída: "null é um valor falsy"

// Exemplo 5 - O valor undefined
if (undefined) {
    console.log("Isso não será exibido");
} else {
    console.log("undefined é um valor falsy");
}
// Saída: "undefined é um valor falsy"

// Exemplo 6 - O valor NaN
if (NaN) {
    console.log("Isso não será exibido");
} else {
    console.log("NaN é um valor falsy");
}
// Saída: "NaN é um valor falsy"


// VALORES TRUTHY -------------------------------------------------------------

// Exemplo 1 - Uma string não vazia
if ("hello") {
    console.log("Strings não vazias são truthy");
}
// Saída: "Strings não vazias são truthy"

// Exemplo 2 - Um número diferente de zero
if (42) {
    console.log("Números diferentes de zero são truthy");
}
// Saída: "Números diferentes de zero são truthy"

// Exemplo 3 - Um objeto (vazio ou não)
if ({}) {
    console.log("Confusão: objetos, mesmo quando vazios, são truthy");
}
// Saída: "Confusão: objetos, mesmo quando vazios, são truthy"

// Exemplo 4 - Um array (vazio ou não)
if ([]) {
    console.log("Confusão: arrays, mesmo quando vazios, são truthy");
}
// Saída: "Confusão: arrays, mesmo quando vazios, são truthy"
