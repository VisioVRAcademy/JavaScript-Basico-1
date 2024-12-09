// LOOP FOR -------------------------------------------------------------------

// Exemplo 1 - Loop for
for (let i = 1; i <= 5; i++) {
    console.log(i); // Imprime os números de 1 a 5
}

// Expressões podem ser separadas por vírgula...
let j = 1; // Let é uma declaração, então precisa ficar em sua própria linha
j++, console.log(j), console.log("Terceira expressão em cadeia"); // Três expressões em cadeia

// ...sendo assim...
let k;
//  -------- expressão 1 --------  - e2 -  ------------ expressão 3 -----------
for (console.log("Início"), k = 1; k <= 5; k++, console.log("Fim da iteração")) {
    console.log(k); // Imprime os números de 1 a 5
}
