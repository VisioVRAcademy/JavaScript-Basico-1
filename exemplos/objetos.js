// OBJETOS --------------------------------------------------------------------

// Exemplo 1 - Criando objetos
var pessoa = {
    nome: "João",
    idade: 25,
    estado: "Ceará",
};
console.log(pessoa.nome); // João
console.log(pessoa.idade); // 25
console.log(pessoa.estado); // Ceará

// Exemplo 2 - Adicionando ou atualizando propriedades
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

// Atualizando uma propriedade existente
carro.modelo = "Camry";

// Adicionando uma nova propriedade
carro.ano = 2020;

console.log(carro); // { marca: "Toyota", modelo: "Camry", ano: 2020 }

// Exemplo 3 - Adicionando ou atualizando propriedades (colchetes)
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

var propriedade = "cor";

carro[propriedade] = "preto"; // Usando variável nos colchetes
carro["O vidro é fumê?"] = true; // Usando frase complexa nos colchetes

console.log(carro); // { marca: 'Toyota', modelo: 'Corolla', cor: 'preto', 'O vidro é fumê?': true }
