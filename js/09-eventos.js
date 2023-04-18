// Exemplo 1
const exemplo1 = document.querySelector("span");

/* Ouvinte/Monitor de Evento
addEventListener
("tipo de evento", função com as ações) */
exemplo1.addEventListener("click", function(){
    exemplo1.textContent = "Beleza!";
    exemplo1.style.fontFamily = "Verdana";
    exemplo1.style.textTransform = "uppercase";
    exemplo1.style.color = "red";
});

exemplo1.addEventListener("mouseout", function(){
    exemplo1.textContent = "Exemplo 01:";
    // exemplo1.style.all = "unset";

    if( pagina.classList.contains('modo-noturno') ){
        exemplo1.style.color = "white";
    } else {
        exemplo1.style.color = "black";
    }

    exemplo1.style.fontFamily = "Times New Roman";
    exemplo1.style.textTransform = "none";
});


// Exemplo 2: modo noturno

/* Etapa 1: selecionar o objeto/elemento
que será modificado */
const pagina = document.querySelector("body");

/* Etapa 2: selecionar o objeto/elemento
que será o responsável por ativar/desativar
a classe */
const botao = document.querySelector("#noturno");

/* Etapa 3: programação do evento de 
clique no botão */
botao.addEventListener("click", function(){
    
    /* Etapa 4: alternar (ativar/desativar) a classe na pagina */
    pagina.classList.toggle("modo-noturno");

    /* Etapa 5: condicional para mudar o texto do botão */
    if( botao.textContent == "Ativar" ){
        botao.textContent = "Desativar";
    } else {
        botao.textContent = "Ativar";
    }
});

/* Exemplo básico usando recursos de data/hora */
/* let data = new Date();
let minuto = data.getMinutes();
console.log(minuto);

if(minuto >= 24){
    pagina.classList.add("modo-noturno")
} */


// Exemplo 3: simulação de cadastro
/* Captura de dados de formulário, cálculos de valores,
verificação condicional, criação de HTML via JS, 
adição de conteúdo/resultados na página (DOM) */

/* Etapa 1: 
Acessar e selecionar os elementos que serão usados */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

/* Etapa 2:
Monitorar o evento de acionamento do formulário,
ou seja, detectar quando o usuário clica no botão do formulário
OU pressiona ENTER. */
formulario.addEventListener("submit", function(event){
    /* Usamos o comando abaixo para anular o 
    comportamento padrão do navegador de tentar
    fazer um redirecionamento de página ao
    acionar o formulário. Isso é importante para
    as ações programadas na função possam ser interpretadas. */
    event.preventDefault();

    /* Etapa 3: capturar os valores digitados
    DENTRO de cada campo (através do value) */
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    /* Exercícios */

    // (ETAPA 4) 1) Calcule e guarde a média destas notas
    let media = (nota1 + nota2) / 2;

    // 2) Com a média calculada, determine a situação do aluno (aprovado ou reprovado). Para aprovação, média tem que ser maior ou igual a 7.
    // ETAPA 5
    let situacao;
    if(media >= 7){
        situacao = "aprovado";
    } else {
        situacao = "reprovado";
    }
    // 3) Mostre no console o nome do aluno, suas notas, sua média e sua situação (aprovado ou reprovado.)    
    console.log(nome, nota1, nota2, media, situacao);

    /* Programação para colocar os resultados no HTML */

    // 1) Criar o elemento/tag que será colocada no HTML
    let paragrafo = document.createElement("p");

    // 2) Montar o conteúdo da nova tag
    paragrafo.innerHTML = `${nome} - ${media} - ${situacao}`;

    // 3) Adicionar ao HTML de destino (injetar no DOM)
    divResultados.appendChild(paragrafo);

    // Limpar os campos
    formulario.reset();

    // Devolver o foco (cursor) para o campo nome
    campoNome.focus();

});










