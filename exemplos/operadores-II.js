// OPERADORES II --------------------------------------------------------------

// Exemplo 1 - Operadores binários
console.log(2 + 14);

var x = 15;
var y = 4;

console.log(x % y); // 3 (15 dividido por 4 tem resto 3)
console.log(10 % 2); // 0 (10 é divisível por 2, resto 0)
console.log(7 % 2); // 1 (7 é ímpar, sobra 1)

var p = 10;
var q = 3;
console.log(p / q); // 3.3333333333333335 (valor com casas decimais)
console.log(p % q); // 1 (resto após tentar encaixar q o máximo de vezes possível dentro de p)

// Exemplo 2 - Operadores unários
console.log(+ "14");
console.log(- "14");
console.log(+ true);
console.log(+ 13 > 15);

var number = 2;

console.log(++number);
// console.log(number + 1);

// console.log(number++);
// console.log(number);

// console.log(--number);
// console.log(number - 1);

// console.log(number--);
// console.log(number);

// Exemplo 3 - Operador ternário
console.log(true ? 10 : 20);
console.log(5 > 2 ? "Cinco é maior que dois" : "Cinco não é maior que dois");

// if (true) {
//     console.log(10);
// } else {
//     console.log(20);
// }

// if (5 > 2) {
//     console.log("Cinco é maior que dois");
// } else {
//     console.log("Cinco não é maior que dois");
// }

// if (true) {
//     var num = 10;
// } else {
//     var num = 20;
// }
// console.log(num);

// var num = true ? 10 : 20;
// console.log(num);

// var resultado = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado"; // Difícil de ler

// if (nota >= 7) {
//     resultado = "Aprovado";
// } else if (nota >= 5) {
//     resultado = "Recuperação";
// } else {
//     resultado = "Reprovado";
// }

// Exemplo 4 - Combinação de operadores
var a = 5;

console.log(a > 3 || a == 3); // true
console.log(a >= 3); // true

var b = 10;
var temp = 0;
console.log(b = b + 1);
console.log(b += 1);

// Exemplo 5 - Operadores em formato de palavra-chave
var obj = { name: "John" };
console.log("name" in obj); // "in" é um operador binário que diz se uma propriedade existe em um objeto

console.log(typeof "hello"); // "typeof" é um operador unário que informa o tipo de uma expressão

var obj = { a: 1, b: 2 };
delete obj.a; // "delete" é um operador unário que tenta deletar uma propriedade de um objeto e informa se conseguiu
console.log(obj); // { b: 2 }
