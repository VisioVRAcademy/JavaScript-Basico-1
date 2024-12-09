// A ESTRUTURA SWITCH ---------------------------------------------------------

// Exemplo 1 - Comparando valores com a estrutura switch
switch (5 - 3) {
    case 2:
        console.log("Dia de trabalhar!");
        break; // Removendo essa linha, o código imprimirá essa instrução e a próxima
    case 7:
        console.log("Dia de descansar!");
        break;
    default:
        console.log("Dia desconhecido.");
}
