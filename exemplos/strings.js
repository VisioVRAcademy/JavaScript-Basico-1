// STRINGS --------------------------------------------------------------------

// Exemplo 1 - Definição de uma string com aspas simples
var nome = 'João';
console.log(nome); // Saída: João

// Exemplo 2 - Definição de uma string com aspas duplas
var nome = "Maria";
console.log(nome); // Saída: Maria

// Exemplo 3 - Não é possível misturar os tipos de aspas
// var frase = "Olá, meu nome é Flávio';
// console.log(frase); // SyntaxError: Invalid or unexpected token

// Exemplo 4 - Também não é possível colocar o mesmo tipo dentro de si mesmo
// var frase = "Eu disse "Olá, mundo!" para todos.";
// console.log(frase); // SyntaxError: Unexpected identifier 'Olá'

// Exemplo 5 - Aspas dentro de aspas apenas se forem de tipos diferentes
var frase = "Eu disse 'Olá, mundo!' para todos."; // Usando aspas simples dentro das aspas duplas
var frase = 'Eu disse "Olá, mundo!" para todos.'; // Usando aspas duplas dentro das aspas simples

// Exemplo 6 - Escapando aspas
var frase = "Ela me disse: \"Eu vou te esperar aqui.\""; // Aspas duplas escapadas
console.log(frase); // Saída: Ela me disse: "Eu vou te esperar aqui."

var frase = 'Ele gritou: \'Cuidado!\' para todos.'; // Aspas simples escapadas
console.log(frase); // Saída: Ele gritou: 'Cuidado!' para todos.

// Exemplo 7 - Misturando e escapando ao mesmo tempo
var frase = "Eu disse 'Olá!' e ela respondeu: \"Oi!\""; // Misturando e escapando
console.log(frase); // Saída: Eu disse 'Olá!' e ela respondeu: "Oi!"


// TEMPLATE STRINGS (OU TEMPLATE LITERALS) ------------------------------------

// Exemplo 1 - Múltiplas linhas com template strings
var mensagem = `Essa é uma mensagem
escrita em várias linhas
sem complicação.`;
console.log(mensagem);
/*
Saída:
Essa é uma mensagem
escrita em várias linhas
sem complicação.
*/

// Exemplo 2 - Múltiplas linhas com strings normais (sem concatenação ou \n)
// var mensagem = "Essa é uma mensagem
//                 escrita em várias linhas
//                 com complicação.";
/*
SyntaxError: Invalid or unexpected token
*/

// Exemplo 3 - Múltiplas linhas com strings normais (com concatenação e sem \n)
var mensagem = "Essa é uma mensagem" +
                "escrita em várias linhas" +
                "com complicação.";

console.log(mensagem);
/*
Saída:
Essa é uma mensagemescrita em várias linhascom complicação.
*/

// Exemplo 4 - Múltiplas linhas com strings normais (com concatenação e \n)
var mensagem = "Essa é uma mensagem\n" +
                "escrita em várias linhas\n" +
                "sem complicação.";

console.log(mensagem);
/*
Saída:
Essa é uma mensagem
escrita em várias linhas
sem complicação.
*/

// Exemplo 5 - Concatenação de variáveis em strings normais
var nome = "Ana";
var recado = "Olá, " + nome + "! Tudo bem?";
console.log(recado); // Saída: Olá, Ana! Tudo bem?

// Exemplo 6 - Interpolação de variáveis em template strings
var nome = "Ana";
var recado = `Olá, ${nome}! Tudo bem?`;
console.log(recado); // Saída: Olá, Ana! Tudo bem?

// Exemplo 7 - Interpolação de expressões em template strings
var a = 5;
var b = 3;
var resultado = `A soma de ${a} e ${b} é ${a + b}.`;
console.log(resultado); // Saída: A soma de 5 e 3 é 8.
