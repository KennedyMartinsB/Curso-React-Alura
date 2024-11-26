// Soma e concatenação +
// Subtração -
// Divisão /
// Potencia **
// Resto da divisão %
/* typeof retorna o tipo de dado que é contido na variavel:
Number: converte o valor string em numero independente de ser inteiro ou double(Float)
Int: transforma a string em numero inteiro
Float: transforma a string em um numero decimal
OBS: Só é possivel realizar a conversão de valores numericos em formato string pois se forem letras retornará o erro NaN(Not a Number)

*/

const num1 = 5;
const num2 = 10;
const numString = "15";
const numConvert = parseInt(numString)

console.log("Soma: " + num1 + num2);
console.log("Subtração: " + num1 - num2)
console.log("Resto da divisão: "+ (num1%10))
console.log("Divisão: "+ (num1/num2))
console.log(typeof numString)
console.log(numConvert)