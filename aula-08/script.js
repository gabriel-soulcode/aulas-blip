// let nomeUsuario; // Camel Case (JavaScript, Java)
// let NomeUsuario; // Pascal Case (JavaScript, Java)
// let nome_usuario; // Snake Case (Python, PHP)
// let nome-usuario; // Kebab Case (HTML, CSS) (não funciona no JS)


let nome = "Gabriel Braga";
let idade = 23;
let nota = 9.5;

nome = "João";
idade = 24;
nota = 8;

console.log(nome, idade, nota);

const nacionalidade = "Brasileiro";
// nacionalidade = "Americano"; // erro

console.log(nacionalidade);

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof nota); // number
console.log(typeof false); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof (() => {})); // function


const n1 = 5;
const n2 = 3;

console.log(n1, n2); // 5 3
console.log(n1 + n2); // 8
console.log(n2 - n1); // -2
console.log(n1 * n2); // 15
console.log(n1 / n2); // 1.66
console.log(n1 ** n2); // 125
console.log(n1 % n2); // 2
console.log(5 * "Amor"); // NaN
console.log(8 / 0); // Infinity

console.log(5 * 9 - (10 + 12) / 3); // 37.666

let num = 3;
num = 5;
num += 3;
num -= 2;
num *= 3;
num /= 2;
console.log(num);

let c = 0;

console.log(c++); // 0
console.log(++c); // 2
console.log(c--); // 2
console.log(--c); // 0


console.log(5 == 7); // false
console.log(5 != 7); // true
console.log(4 > 4); // false
console.log(5 < 9); // true
console.log(4 <= 4); // true
console.log(5 >= 9); // false
console.log("Maria" == "maria"); // false
console.log(true != false); // true
console.log(new Date().toLocaleDateString() == "15/09/2025");
console.log(4 === "4");

console.log(false == 0); // true
console.log(false == ""); // true
console.log(true + 1); // 2
console.log(true + true + false + 3); // 5
console.log(false == 10); // false

// Conjunção (E, AND) &&
// Disjunção (Ou, OR) ||
// Negação (Não, NOT) !

console.log(false && true); // false
console.log(false || false); // false
console.log(!false && true); // true

console.log(((45 / 9 * 4 - 35) == 7) || ((30 / 7) >= (3 + 7 * 2)));
// aritmeticos > comparação > lógicos

const altura = 180;
if (altura >= 160) {
    console.log("traque-traque-traque");
}

const nota1 = 3, nota2 = 6, nota3 = 4;
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

const x = 56;
console.log((x % 2 == 0) ? "Par" : "Impar");

const dia = 80;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia não correspondente.");
}

const cor = "green";

switch (cor) {
    case "red":
    case "blue":
    case "yellow":
        console.log("Cor Primária");
        break;
    case "orange":
    case "violet":
    case "green":
        console.log("Cor Secundária");
        break;
}