// Calculo IMC

let peso = 65;
let  tamanho = 1.52;
const IMC = peso / (tamanho ** 2); 
// também funciona: IMC = peso / (tamanho * tamanho);

if (IMC < 18.5) {
    console.log("IMC Tabela - Magreza");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("IMC Tabela - Normal");
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("IMC Tabela - Sobrepeso");
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log("IMC Tabela - Obesidade Grau I");
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log("IMC Tabela - Obesidade Grau II");
} else {
    console.log("IMC Tabela - Obesidade Grau III");
}

console.log(IMC.toFixed(2)); 