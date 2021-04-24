/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /*   console.log("Hello Rigo from the console!");
  let numero = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let pinta = ["♦", "♥", "♠", "♣"];

  let numIndx = Math.floor(Math.random() * numero.length);
  let pintaIndex = Math.floor(Math.random() * pinta.length);
  let pintarandom = pinta[pintaIndex];

  document.querySelector("#simboloTop1").append(pinta[pintaIndex]);
  document.querySelector("#simboloBot1").append(pinta[pintaIndex]);
  document.querySelector("#num1").append(numero[numIndx]);

  if (pintarandom == "♥" || pintarandom == "♦") {
    document.querySelector("#simboloTop1").classList.add("text-danger");
    document.querySelector("#simboloBot1").classList.add("text-danger");
  } else {
    document.querySelector("#simboloTop1").classList.remove("text-danger");
    document.querySelector("#simboloBot1").classList.remove("text-danger");
  } */
};

let drow = document.querySelector("#drow");
drow.addEventListener("click", function(e) {
  e.preventDefault();
  let entCard = document.querySelector("#entCard");
  var cartasAgenerar = [];
  cartasAgenerar.push(entCard.value);
  console.log(cartasAgenerar);
  //drow.disabled = true;
  // Generador de cartas
  if (cartasAgenerar !== "" && cartasAgenerar <= 4) {
    for (let index = 0; index < cartasAgenerar.length; index++) {
      function dibujarCartas() {}
    }
  }
  //funcion creadora de cartas random
  function dibujarCartas() {
    // pintas y numero random
    let numero = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let pinta = ["♦", "♥", "♠", "♣"];

    let numIndx = Math.floor(Math.random() * numero.length);
    let pintaIndex = Math.floor(Math.random() * pinta.length);
    let numerorandom = numero[numIndx];
    let pintarandom = pinta[pintaIndex];

    // Creamos carta
    let card = document.createElement("div.card.shadow");
    card.classList.add("m-2");

    // Creamos Part Top
    let cardheader = document.createElement(
      "div.card-header.align-middle.py-0.my-0.bg-transparent"
    );
    cardheader.classList.add("border-0");
    // Creamos P dentro de Part Top
    let pPintaT = document.createElement("p");
    pPintaT.innerHTML(pintarandom);
    // Metemos P en Parte Top
    cardheader.appendChild(pPintaT);

    // Creamos Part Mid
    let cardbody = document.createElement("div.card-body.align-middle.py-0");
    cardbody.classList.add("my-0");
    // Creamos P dentro de Part Mid
    let pNum = document.createElement("p");
    pNum.innerHTML(numerorandom);

    // Creanis Part Bot
    let cardfooter = document.createElement(
      "card-footer align-middle py-0 my-0 bg-transparent rotado"
    );
    cardfooter.classList.add("border-0");
    // Creamos P dentro de Part Bot
    let pPintaB = document.createElement("p");
    pPintaB.innerHTML(pintarandom);
    // Metemos P en Parte Top
    cardfooter.appendChild(pPintaB);

    //metemos el top mid y bot en la carta
    card.appendChild(cardheader);
    card.appendChild(cardbody);
    card.appendChild(cardfooter);

    return card;
  }
});
