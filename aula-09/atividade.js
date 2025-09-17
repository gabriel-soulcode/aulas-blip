// Usando for, exiba no console a tabuada do número 5 (de 5x1 até 5x10).
for (let i = 1; i <= 10; i++) {
    console.log("5 *", i, "=", 5*i);
}

// Crie uma variável mes que recebe um número de 1 a 12. Use switch para imprimir o nome do mes da ano correspondente (1 = Janeiro, 2 = Fevereiro, etc).
const mes = 2;
switch(mes) {
    case 1:
        console.log("Janeiro"); break;
    case 2:
        console.log("Fevereiro"); break;
    case 3:
        console.log("Março"); break;
    case 4:
        console.log("Abril"); break;
    case 5:
        console.log("Maio"); break;
    case 6:
        console.log("Junho"); break;
    case 7:
        console.log("Julho"); break;
    case 8:
        console.log("Agosto"); break;
    case 9:
        console.log("Setembro"); break;
    case 10:
        console.log("Outubro"); break;
    case 11:
        console.log("Novembro"); break;
    case 12:
        console.log("Dezembro"); break;
}

// Utilize um laço for para imprimir os números de 20 a 10 no console.
for (let i = 20; i >= 10; i--) {
    console.log(i);
}

// Use um laço while para mostrar todos os números pares de 0 a 20.  
let i = 0;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Use for...in para exibir no console cada propriedade do objeto.
let endereco = { cidade: "São Paulo", estado: "SP", cep: "12345-67" };
for (let prop in endereco) {
    console.log(prop);
    console.log(endereco[prop]);
}

// Use for...of para percorrer o vetor e exibir cada fruta no console.
let frutas = ["Goiaba", "Morango", "Abacaxi", "Manga", "Abacate"];
for (let fruta of frutas) {
    console.log(fruta);
}

// Crie uma variável nota com valor de 0 a 10. Use if/else para exibir:
// "Reprovado" se nota < 5
// "Recuperação" se nota >= 5 e < 7
// "Aprovado" se nota >= 7
let nota = 4;
if (nota < 5) {
    console.log("Reprovado");
} else if (nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}

// Crie um programa que calcule a soma dos números de 1 a 100 usando um laço while.
let n = 1;
let soma = 0;
while (n <= 100) {
    soma += n;
    n++;
}
console.log(soma);

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.
function ehPar(num) {
    return num % 2 == 0;
}
console.log(ehPar(27));

// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).
function calcFatorial(num) {
    let fatorial = 1;
    for (let n = num; n >= 1; n--) {
        fatorial *= n;
    }
    return fatorial;
}

const num = 10;
// console.log(num + "! = " + fatorial);
console.log(`${num}! = ${calcFatorial(num)}`);

// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.
function calcMedia(numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    const quantidade = numeros.length;
    return total / quantidade;
}

const numeros = [24, 36, 72, 80, 56, 12];
console.log(calcMedia(numeros));

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").
function reverter(palavra) {
    let reverso = "";
    for (let letra of palavra) {
        reverso = letra + reverso;
    }
    return reverso;
}

const palavra = "SoulCode";
console.log(reverter(palavra));
console.log(reverter("João"));

// Crie uma função que recebe um número e exiba um triângulo formado com "*" com altura especificada pelo parâmetro.
// altura => 5
// *
// **
// ***
// ****
// *****
function renderizarTorre(altura) {
    for (let i = 1; i <= altura; i++) {
        let linha = "";
        for (let j = 1; j <= i; j++) {
            linha += " *";
        }
        console.log(linha);
    }
}

renderizarTorre(10);