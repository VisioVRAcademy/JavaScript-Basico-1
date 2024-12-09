// DEFININDO VARIÁVEIS COM VAR, LET E CONST -----------------------------------

// Exemplo 1 - var
if (true) {
    var x = 10; // var tem escopo de função, então é visível fora do bloco
}
console.log(x); // 10 - x é acessível fora do bloco if

if (true) {
    var y = 20; // var tem escopo de função, então é visível fora do bloco
}
console.log(y); // 20 - y é acessível fora do bloco if

// Exemplo 2 - let
if (true) {
    let z = 30; // let tem escopo de bloco, então é visível apenas dentro do if
    console.log(z); // 30
}
console.log(z); // Erro: z is not defined - não podemos acessar z fora do bloco

// Exemplo 3 - const
if (true) {
    const x = 50; // const tem escopo de bloco
    console.log(x); // 50
}
console.log(x); // Erro: x is not defined - não podemos acessar x fora do bloco

const x = 50;
x = 60; // Erro: Assignment to constant variable.

// Exemplo 4 - const com objetos
const pessoa = { nome: "Diego", idade: 21 };

console.log(pessoa.nome); // Carlos

// Podemos alterar propriedades internas de um objeto declarado com const
pessoa.idade = 31;
console.log(pessoa.idade); // 31

// Mas não podemos reatribuir o objeto
pessoa = { nome: "Pedro", idade: 27 }; // Erro: Assignment to constant variable.

// Exemplo 5 - const com arrays
const numeros = [1, 2, 3];

console.log(numeros); // [1, 2, 3]

// Podemos alterar os elementos dentro de um array declarado com const
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

// Mas não podemos reatribuir o array
numeros = [5, 6, 7]; // Erro: Assignment to constant variable.


// OUTROS ERROS COMUNS DO USO DE LET E CONST ----------------------------------

// Exemplo 1 - Erro ao declarar variável sem valor com "const"
// const valor; // SyntaxError: Missing initializer in const declaration

// Exemplo 2 - Erro ao declarar a mesma variável duas vezes usando "let" ou "const"
let exemplo1;
exemplo1 = 6; // Valor: 6

// let exemplo2;
// let exemplo2; // SyntaxError: Identifier 'exemplo2' has already been declared

// const exemplo3 = 8;
// const exemplo3 = 8; // SyntaxError: Identifier 'exemplo3' has already been declared

var exemplo4;
var exemplo4;
exemplo4 = 9; // Valor: 9;
