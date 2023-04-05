/* Objeto
Estrutura de dados não-indexados
baseada em pares compostos por uma chave
e um valor. Estes pares são conhecidos
como Propriedade ou Atributos. */

// Exemplo 1: objeto simples
let livro = {
    // chave : valor
    titulo : "Senhor dos Anéis", // propriedade
    ano: 1954,
    volumes: 3,
    autor: "J.R.R. Tolkien"
};

console.log(livro.titulo);
console.log(livro.ano);
console.log(livro.autor);

console.log("-------");

// Exemplo 2: objeto com array e outro objeto
let pessoa = {
    nome: "Ozzy Osbourne",
    idade: 70,
    telefones: ["11-96000-4789", "11-2135-0300"],
    endereco: {
        logradouro: "Rua XYZ",
        numero: "2112",
        bairro: "Penha",
        cidade: "São Paulo"
    }
};

console.log(pessoa.nome); // Ozzy Osbourne
console.log(pessoa.telefones[1]); // 11-2135-0300
console.log(pessoa.endereco.bairro); // Penha

console.log("--------");

// Exemplo 3: Array de objetos
let livros = [
    {
        titulo: "Inside Out",
        autor: "Nick Mason",
        ano: 2012
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        ano: 1950
    },
    {
        titulo: "Game Of Thrones",
        autor: "George R.R. Martin",
        ano: 2010
    }      
];

console.log(livros[1].titulo); // O Hobbit
console.log(livros[0].autor); // Nick Mason