/* Array 
Relação de dados indexados.
Também conhecido como vetores
ou matrizes. 

Finalidade deste recurso é armazenar
uma série de dados num mesmo espaço
de memória. */

// Exemplos 
let alunos = ["Raphael", "Thiago", "Kaiky"];

console.log(alunos);

// Acessando o dado pelo índice
console.log(alunos[1]); // Thiago
console.log(alunos[0]); // Raphael

/* Mini-exercício:
- Crie um array com uma lista de 5 comidas que você mais gosta
- Exiba no console uma mensagem dizendo qual o nome da terceira e da última comida. */

let comidas = ["Pizza", "Esfiha", "Torta de Limão", "Paçoca", "Brigadeiro"];

console.log(comidas[2]);
console.log(comidas[4]);

// Concatenação
console.log(
    "Gosto muito de "+comidas[2]+" e também de "+comidas[4]
);

// Template String
console.log(
    `Gosto muito de ${comidas[2]} e também de ${comidas[4]}`
);


console.log("-------");

// Matriz de 2 dimensões
let tecnologias = [
    ["HTML", "CSS", "JS"],
    ["PHP", "Node", "Java", "SQL"],
    ["Figma", "Photoshop"]
];

console.log(tecnologias);
console.log(tecnologias[0][2]); // JS
console.log(tecnologias[1][1]); // Node
console.log(tecnologias[2][1]); // Photoshop



