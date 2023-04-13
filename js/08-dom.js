/* Métodos/Funções
de acesso/seleção do DOM 

-getElementById("identificador")
Permite acessar/selecionar UM
elemento no DOM desde que ele esteja
com um atributo "id".

-querySelector("seletor qualquer")
Permite acessar/selecionar UM elemento no
DOM através de um seletor CSS.

-querySelectorAll("seletor/res qualquer")
Permite acessar/selecionar UM ou MAIS elementos 
no DOM através de um ou mais seletores CSS. */

/* Exemplos */

// Exemplo 1: getElementById()
const titulo = document.getElementById("exemplo1");
console.log(titulo);

// Modificando o conteúdo dinamicamente
// titulo.textContent = "<i>Brincando com JS!</i>";
titulo.innerHTML = "<i>Brincando com JS!</i>";

// "Injetando" CSS inline
titulo.style.color = "red";
titulo.style.textAlign = "center";
titulo.style.backgroundColor = "yellow";


// Exemplo 2: querySelector
const exemplo2 = document.querySelector("h2");
console.log(exemplo2);

// Adicionando classe CSS via JS
exemplo2.classList.add("destaque-item");


// Exemplo 3: querySelectorAll
const links = document.querySelectorAll("li a");
console.log(links);
/* Na prática, o resultado do querySelectorAll SEMPRE
será um ARRAY (ou NodeList) */

/* Aplicando o atributo target="_blank" aos
links selecionados */
for(let link of links){
    link.setAttribute("target", "_blank");
    console.log(link);
}

/* let i = 0;
let qtdLinks = links.length;
while( i < qtdLinks){
    links[i].setAttribute("target", "_blank");
    i++;
} */





















