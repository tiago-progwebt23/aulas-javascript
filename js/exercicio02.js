let valorEmDolares = 1000;
let cotacaoDolar = 4.94;

function converteMoeda(valor){
    return valor * cotacaoDolar;
}

// Arrow Function
// const converteMoeda = valor => valor * cotacaoDolar;

let valorConvertido = converteMoeda(valorEmDolares);

console.log(`Valor em dólares: ${valorEmDolares}`);
console.log(`Valor em reais (convertido): ${valorConvertido}`);



