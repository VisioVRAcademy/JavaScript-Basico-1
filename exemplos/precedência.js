// PRECEDÊNCIA ----------------------------------------------------------------

// Exemplo 1 - Operadores aritméticos
// Em JavaScript, os operadores multiplicação (*), divisão (/) e módulo (%)
// têm MAIOR precedência que adição (+) e subtração (-).
var resultado = 3 + 2 * 5;
console.log(resultado); // 13

// Exemplo 2 - Operadores de comparação
// Os operadores de comparação, como igualdade (==) e maior que (>),
// têm MENOR precedência do que os operadores aritméticos.
var resultado = 5 + 3 == 8;
console.log(resultado); // true

// Exemplo 3 - Operadores lógicos e de comparação
// Os operadores lógicos (&& e ||) têm MENOR precedência do que
// os operadores de comparação (==, >, etc.).
var resultado = 5 > 3 && 10 < 15;
console.log(resultado); // true

// Exemplo 4 - Operadores lógicos entre si
// O operador && tem maior precedência que ||.
var resultado = true || false && false;
console.log(resultado); // true

// Exemplo 5 - Parênteses
// Os parênteses sempre têm a maior precedência e podem ser usados
// para garantir que uma operação seja realizada primeiro.
var resultado = (3 + 2) * 5;
console.log(resultado); // 25
