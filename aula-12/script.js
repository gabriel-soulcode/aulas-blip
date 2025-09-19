const lang = "JavaScript";
console.log(lang);
console.log(typeof lang);

console.log(lang.concat(" é bom demais!"));
console.log(lang + " é bom demais!");
console.log(`${lang} é bom demais!`);

console.log(lang.includes('Java')); // true

console.log(lang.startsWith("Script")); // false
console.log(lang.endsWith("Script")); // true

const frase = "A casa do meu amigo é próxima do bar.";
console.log(frase.indexOf("apartamento")); // -1

console.log(frase.toLowerCase()); // minuscula
console.log(frase.toUpperCase()); // maiuscula

if ("Ana".toLowerCase() == "AnA".toLowerCase()) {
    console.log("Igual")
}

console.log(frase.slice(14, 19));
console.log(frase.slice(14));
console.log(frase.slice(-4));

console.log(frase.replace("amigo", "primo"));
console.log(frase.replaceAll("a", "o"));

console.log(frase.split(""));
console.log(frase.split(" "));

const data = "2024-12-05";
const vetor = data.split("-");
console.log(`${vetor[2]}/${vetor[1]}/${vetor[0]}`);

const nome = "  Gabriel Braga";
console.log(nome);
console.log(nome.trim());


const num = 15;
console.log(num);

console.log(num.toFixed(2));

console.log(num.toString(2));

console.log(num.toString(8));

console.log(num.toString(16));

console.log(Number.isNaN(undefined / 2));

console.log(Number.isFinite(num / 0));

console.log(Number.isInteger(15.3));

console.log(Number.parseInt(2.3245678));

console.log(Number.parseFloat("2.567890"));

console.log(Number("12.345"));

console.log(Math.abs(-10));

const n = 34.467;

console.log(Math.ceil(n));

console.log(Math.floor(n));

console.log(Math.round(n));

const x = 150.6548;
const y = parseInt(x * 100) / 100;
console.log(y);

const aletorio = Math.random(); // [0 - 1[

console.log(Math.ceil(aletorio * 10));

console.log(Math.pow(4, 3));

console.log(Math.sqrt(81));

console.log(Math.max(12, 45, 67, 23, 90, 123));

console.log(Math.min(12, 45, 67, 23, 90, 123));

console.log(Math.trunc(15.23));

const dataHoje = new Date();
console.log(dataHoje);

const natal = new Date("2025-12-25 12:30:00");
console.log(natal);

const anoNovo = new Date(2026, 0, 1, 13, 20, 0);
console.log(anoNovo);

const timestamp = Date.now();
const tritaMin = 30 * 60 * 1000;
const dataTime = new Date(timestamp + tritaMin);
console.log(timestamp);
console.log(dataTime);

console.log(dataHoje.getFullYear());
console.log(dataHoje.getMonth() + 1);
console.log(dataHoje.getDate());
console.log(dataHoje.getDay());
console.log(dataHoje.getHours());
console.log(dataHoje.getMinutes());
console.log(dataHoje.getSeconds());

if (natal < anoNovo) {
    console.log("Natal vem antes.")
} else {
    console.log("Natal vai depois.")
}

console.log(dataHoje.toLocaleDateString("pt-br"));

console.log(dataHoje.toLocaleTimeString("pt-br"));

console.log(dataHoje.toLocaleString("pt-br", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Porto_Velho"
}));

const json = "{ \"nome\": \"João\", \"idade\": 24 }";
const aluno = JSON.parse(json);
console.log(aluno.nome, aluno.idade);

const curso = {
    nome: "Desenvolvimento Web com JavaScript",
    preco: 500.00
};

const jsonCurso = JSON.stringify(curso);
console.log(jsonCurso);

