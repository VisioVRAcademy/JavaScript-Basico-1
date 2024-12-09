// CONVERSÃO EXPLÍCITA --------------------------------------------------------

// Exemplo 1 - Utilizando Number()
var texto = "42";
var numero = Number(texto); // Converte a string "42" para o número 42
console.log(numero); // 42

var texto = "quarenta e dois";
var numero = Number(texto); // NaN
console.log(numero); // NaN

// Exemplo 2 - Utilizando String()
var numero = 123;
var texto = String(numero); // Converte o número 123 para a string "123"
console.log(texto); // "123"

// Exemplo 3 - Utilizando Boolean()
var valor = 0;
var booleano = Boolean(valor); // Converte 0 para false
console.log(booleano); // false

// Exemplo 4 - Utilizando Array.from()
var texto = "Olá";
var array = Array.from(texto); // Converte a string "Olá" para o array ['O', 'l', 'á']
console.log(array); // ['O', 'l', 'á']

// Exemplo 5 - Utilizando parseInt()
var texto = "42 anos";
var numero = parseInt(texto); // Converte "42 anos" para 42
console.log(numero); // 42

var texto = "anos 42";
var numero = parseInt(texto); // NaN
console.log(numero); // NaN
