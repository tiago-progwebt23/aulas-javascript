const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");
const imagem = document.querySelector("#imagem");
const efeitoSom = document.querySelector("#efeito");

// Imagem errou
let faustao = "https://gifs.eco.br/wp-content/uploads/2022/09/gifs-do-faustao-6.gif";

// Imagem acertou
let miseravi = "https://global.discourse-cdn.com/nubank/original/4X/c/6/1/c618d7c4ffc3a461465f4e65e351dbb331a41111.gif";

let vitoria = "audio/som-vitoria.wav";

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let palpiteDigitado = parseInt(campoPalpite.value);
    console.log(`Palpite: ${palpiteDigitado}`);

    /* Se o palpite digitado pelo usuário
    for igual ao número aleatório que o jogo gerou */
    if(palpiteDigitado == numeroAleatorio){
        // Então acertou!
        resultado.innerHTML = "Acertou! 😍";
        resultado.style.color = "blue";

        imagem.src = miseravi;
        efeitoSom.src = "audio/som-vitoria.wav";
        efeitoSom.play();

    /* Senão, se o palpite digitado for menor que zero
    OU maior que 10 */        
    } else if( palpiteDigitado < 0 || palpiteDigitado > 10 ){
        // Então informar que os valores precisam ser entre 0 e 10
        resultado.innerHTML = "Digite um valor entre 0 e 10! 😱";
        resultado.style.color = "orange";
    } else {
        // Senão, errou!
        resultado.innerHTML = "Errou! 💩";
        resultado.style.color = "red";
        imagem.src = faustao;
    }
});

/* Gerar valores entre 0 e 10 (sem casa decimal) */
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);