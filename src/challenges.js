// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  return frase.split (" ")  
}

// Desafio 4

function concatName(name) {

 return name [name.length -1 ] + ", " + name[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {

  let maiorNumero = numbers[0];
  let quantidadeMaiorNumero = 0;

  for (indice = 0; indice < numbers.length; indice ++){
    if (numbers[indice] > maiorNumero){
       maiorNumero = numbers[indice]
    }  
}
  for (indice = 0; indice < numbers.length; indice ++){
    if (maiorNumero === numbers[indice]){
      quantidadeMaiorNumero++
     }
    }

return quantidadeMaiorNumero
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
