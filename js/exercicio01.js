// ENTRADA DE DADOS (entrada via prompt)
let nome = prompt("Informe seu nome: ");
let idade = parseInt(prompt("Informe sua idade: "));

// LÓGICA DAS FAIXAS DE IDADE

// VERSÃO 1 (sem refatoração)
// if ( idade >= 18 && idade < 60 ) {
//     alert(`${nome}, você é uma pessoa adulta`);
// } else if( idade >= 60 ){
//     alert(`${nome}, você é uma pessoa idosa`);
// } else {
//     alert(`${nome}, você é uma pessoa menor de idade`);
// }

// Versão 2: com refatoração (melhorias)
let mensagem;
if ( idade >= 18 && idade < 60 ) {
    mensagem = "adulta";
} else if( idade >= 60 ){
    mensagem = "idosa";
} else {
    mensagem = "menor de idade";
}
alert(`${nome}, você é uma pessoa ${mensagem}`);
