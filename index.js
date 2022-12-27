const btnCookie = document.querySelector(".cookie");
const btnTry = document.querySelector(".try");
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const displayluck = document.querySelector(".luck");

let randomNumber = Math.round(Math.random() * 3);
console.log(randomNumber)

const phraseList = [
  "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
  "Sorte é estar pronto quando a oportunidade vem.",
  "Ser feliz sem motivo é a mais autêntica forma de felicidade.",
  "A nossa felicidade depende mais do que temos nas nossas cabeças, do que nos nossos bolsos.",
];

function luckPhrase() {
  if(randomNumber == 0) {
    displayluck.textContent = phraseList[0]
  }

  if(randomNumber == 1) {
    displayluck.textContent = phraseList[1]
  }

  if(randomNumber == 2) {
    displayluck.textContent = phraseList[2]
  }

  if(randomNumber == 3) {
    displayluck.textContent = phraseList[3]
  }
};

btnCookie.addEventListener("click", function() {
  screenOne.classList.toggle("hidden");
  screenTwo.classList.toggle("hidden");

  luckPhrase();
});

btnTry.addEventListener("click", function() {
  screenOne.classList.toggle("hidden");
  screenTwo.classList.toggle("hidden");

  randomNumber = Math.round(Math.random() * 3);
  console.log(randomNumber)
});

