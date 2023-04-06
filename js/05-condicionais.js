/* Comandos condicionais
if (SE) / else (SENÃO)
else if (SENÃO SE)
switch (ESCOLHA/ANALISE) / case (CASO)

Operadores relacionais: 
>   (MAIOR QUE)
<   (MENOR QUE)
>=  (MAIOR OU IGUAL)
<=  (MENOR OU IGUAL)
==  (IGUALDADE)
!=  (DIFERENTE) */

// Exemplos
const aluno = "Chaves";
let nota1 = 10;
let nota2 = 9;
let faltas = 11;
let media = (nota1 + nota2) / 2;

console.log(`Aluno(a): ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);
console.log(`Faltas: ${faltas}`);

// Critérios de aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

/* ALGORITMO: 
Se a média obtida pelo aluno(a) for maior ou igual 
à média mínima da escola E se suas faltas forem abaixo
do limite, então ele estará aprovado. Caso contrário,
ele estará reprovado. */

/* Condicional Composta */
if (media >= mediaMinima && faltas < limiteDeFaltas) {
    console.log("aprovado");
} else {
    console.log("reprovado");
}

/* Condicional Encadeada */

/* Algoritmo para análise de desempenho
Média menor que 3? PÉSSIMO
Média menor que 5? RUIM
Média menor que 7? REGULAR
Média menor que 9? BOM
Nenhuma das anteriores? ÓTIMO */

let desempenho;
if(media < 3){
    desempenho = "PÉSSIMO";
} else if(media < 5) {
    desempenho = "RUIM";
} else if(media < 7) {
    desempenho = "REGULAR";
} else if(media < 9) {
    desempenho = "BOM";
} else {
    desempenho = "ÓTIMO";
}

console.log(desempenho);








