// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").
function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}

console.log(inverterTexto("Blip"));

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.
const nomes = ["Ana", "João", "Caio", "Maria", "Daniel"];
console.log(nomes[0]);
console.log(nomes[nomes.length-1]);

// Crie um array de frutas. Adicione duas novas fruta.
const frutas = ["Morango", "Abacaxi", "Laranja"];
console.log(frutas);

frutas.push("Banana");
console.log(frutas);

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.
nomes.sort();
console.log(nomes);
frutas.sort();
console.log(frutas);

const ns = [8, 4, 9, 5, 0, 1, 7, 3, 11, 2, 6];
ns.sort();
console.log(ns);

// Dado um array de números, verifique se o número 10 está presente.
if (ns.includes(10)) {
    console.log("10 está presente!");
} else {
    console.log("10 está ausente!");
}

// Dado um array de números, crie um novo array com apenas os números pares.
const numerosPares = [];
for (let n of ns) {
    if (n % 2 == 0) {
        numerosPares.push(n);
    }
}
console.log(numerosPares);

const pares = ns.filter(n => n % 2 == 0);
console.log(pares);

// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.
const pessoa = {
    nome: "Antônio",
    idade: 50,
    cidade: "Fortaleza"
};
for (let prop in pessoa) {
    console.log(prop, pessoa[prop]);
}

// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.
const alunos = [
    { nome: "Marcos", nota1: 8, nota2: 9 },
    { nome: "Isabel", nota1: 6, nota2: 7 },
    { nome: "Eric", nota1: 4, nota2: 3 }
];
console.log(alunos);

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.
alunos.forEach(aluno => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}\nNota: ${media}`);
});

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
// "Carro: [marca] [modelo]"
const mensagemCarro = (carro) => {
    return `Carro: ${carro.marca} ${carro.modelo}`;
}
console.log(mensagemCarro({
    marca: "Toyota",
    modelo: "Hilux"
}));

// Crie uma função que receba um texto e retorne o mesmo texto: todo em maiúsculas, todo em minúsculas.
const formatarTexto = (texto) => {
    return `${texto.toUpperCase()}, ${texto.toLowerCase()}`;
}

console.log(formatarTexto("Azure"));

// Crie um programa que tenha uma frase e conte quantas palavras ela possui, considerando que as palavras estão separadas por espaço.
const frase = 'HTML CSS e JavaScript compõe um site.';
console.log(frase);
console.log("Palavras:", frase.split(" ").length);

// Crie um programa que tenha uma string e retorne a mesma frase com a primeira letra de cada palavra em maiúscula.
const nome = "maria de fátima";
const palavras = nome.split(" ");
const novasPalavras = palavras.map(pl => {
    return pl[0].toUpperCase() + pl.slice(1);
});

const novoNome = novasPalavras.join(" ");
console.log(nome);
console.log(novoNome);

for (let i in palavras) {
    const pl = palavras[i];
    palavras[i] = pl.replace(pl[0], pl[0].toUpperCase());
}

console.log(palavras.join(" "));

// Crie um programa que tenha um número decimal e mostre: arredondado para cima, arredondado para baixo e arredondado normalmente.
const num = 8.4;
console.log(num);
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));

// Crie um programa que tenha um número e exiba sua raiz quadrada.
const raiz = 900;
console.log(Math.sqrt(raiz));
console.log(raiz ** (1/2));

// Crie um programa que gere um número aleatório inteiro entre 1 e 100.
const aleatorio = Math.ceil(Math.random() * 100);
console.log(aleatorio);

// Crie um programa que tenha 5 números e exiba: o maior número e o menor número entre eles.
const a = 4, b = 9, c = 5, d = 3, e = 4;
console.log(Math.max(a, b, c, d, e));

const nums = [4, 9, 5, 3, 4];
console.log(Math.max(...nums));

// Crie um programa que tenha duas datas e calcule quantos dias existem entre elas.
const dataInicio = new Date(2025, 7, 20);
const dataFim = new Date();
const diferenca = Math.abs(dataFim - dataInicio); // milis
const dias = diferenca / (1000 * 60 * 60 * 24);
console.log(Math.floor(dias));

// Crie um programa que tenha data e um número N. Exiba a nova data resultante da soma de N dias à data inicial.
const hoje = new Date();
const n = 18;

const time = hoje.getTime() + (n * 24 * 60 * 60 * 1000);
console.log(new Date(time));

hoje.setDate(hoje.getDate() + n);
console.log(hoje);

// Crie um programa que exiba a data atual formatada para três padrões de países diferentes: Brasil, EUA, Japão e Rússia.
const agora = new Date();

console.log(agora);

console.log(agora.toLocaleString("pt-br", {
    timeZone: "America/Sao_Paulo"
}));

console.log(agora.toLocaleString("en-us", {
    timeZone: "America/New_York"
}));

console.log(agora.toLocaleString("ja-jp", {
    timeZone: "Asia/Tokyo"
}));

console.log(agora.toLocaleString("ru-ru", {
    timeZone: "Europe/Moscow"
}));