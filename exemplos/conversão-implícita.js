// CONVERSÃO IMPLÍCITA --------------------------------------------------------

// Exemplo 1 - Número para string em concatenações
var numero = 10;
var texto = "O número é " + numero; // O JavaScript converte o 10 para uma string
console.log(texto); // Saída: "O número é 10"

// Exemplo 2 - String para número em operações matemáticas
var stringNumero = "5";
var resultado = stringNumero * 2; // A string "5" é convertida para o número 5
console.log(resultado); // Saída: 10

// Exemplo 3 - Conversão implícita em comparações
var numero = 10;
var texto = "10";
console.log(numero == texto); // true, pois o JavaScript converte a string "10" para o número 10
console.log(numero === texto); // false, pois são tipos diferentes (número e string)

// Exemplo 4 - Números para booleanos
var valor = 0;
if (valor) {
    console.log("Valor é verdadeiro");
} else {
    console.log("Valor é falso"); // Este código será executado, pois 0 é convertido para false
}

// Exemplo 5 - Booleanos para números
var a = true;
var b = false;
console.log(a + 1); // Saída: 2, pois true é convertido para 1
console.log(b + 1); // Saída: 1, pois false é convertido para 0

// Exemplo 6 - Null e undefined
var nulo = null;
var indefinido = undefined;
console.log(nulo + 1); // Saída: 1, pois null é convertido para 0
console.log(indefinido + 1); // Saída: NaN, pois undefined não pode ser convertido para um número

// Exemplo 7 - Array para string
var arr = [1, 2, 3];
var texto = "Valores: " + arr; // O array é convertido para a string "1,2,3"
console.log(texto); // Saída: "Valores: 1,2,3"
