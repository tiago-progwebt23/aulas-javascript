/* Relembrando: 
Funções nativas do JS já usadas

log(), prompt(), alert(), toLocaleString(), parseInt() */

/* Funções personalizadas 
- Organização de lógica, com separação de responsabilidades
- Reaproveitamento de código */

/* Sintaxe 1 (tradicional) 
Função anônima/literal */
const exemplo1 = function(){
    // corpo da função (ações)
    console.log("Função anônima!");
};

/* Obs.: para uma função fazer
o que ela foi programada para
fazer, em algum momento ela precisa
ser "chamada/invocada". */

// Chamada de função
exemplo1();

/* Sintaxe 2 (tradicional)
Função nomeada/declarada */
function exemplo2(){
    // corpo da função (ações)
    console.log("Função nomeada!");
}

exemplo2();

/* Sintaxe 3 (moderna/atual):  
Arrow Function (função "flecha/seta")

Obs.: esta é a sintaxe usada nos
frameworks JS mais populares: React,
Angular, Vue, React Native */
const exemplo3 = () => {
    console.log("Arrow Function!");
}; 

exemplo3();

console.log("-----");

/* Funções com parâmetros/argumentos
Parâmetros (ou argumentos) são
dados passados para a função "entender"
o que ela deve processar/fazer.

Exemplo: uma função que calcule um frete
precisa pelo menos de um parâmetro com
o CEP do local de entrega. */

function login(usuario, senha){
    /* Base de dados fictícia com 
    usuario tiagobsantos e senha 123abc */
    if(usuario == "tiagobsantos" && senha == "123abc" ){
        console.log("Dados corretos, usuário entrou");
    } else {
        console.log("Dados incorretos, acesso bloqueado");
    }
}

login("tiagobsanto", "123abc");

console.log("-------");

function soma(valor1, valor2){
    // variável de escopo LOCAL
    let total = valor1 + valor2;
    return total;  
}

let resultadoA = soma(10, 500);
let resultadoB = soma(5, 1200);
let resultadoC = soma(8.9, 147.56);

console.log(resultadoA);
console.log(resultadoB);
console.log(resultadoC);








