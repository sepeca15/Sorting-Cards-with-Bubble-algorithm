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
var cartas = document.querySelector("#Cartas");
let drow = document.querySelector("#drow");
drow.addEventListener("click", function(e) {
  e.preventDefault();
  let entCard = document.querySelector("#entCard").value;
  drow.disabled = true;
  // Generador de cartas
  if (entCard > 0 && entCard <= 4) {
    for (let index = 0; index < entCard; index++) {
      cartas.appendChild(dibujarCartas());
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
    var numerorandom = numero[numIndx];
    var pintarandom = pinta[pintaIndex];
    console.log(pintarandom, numerorandom);

    // Creamos carta
    var carddiv = document.createElement("div");
    carddiv.classList.add("m-2", "card", "shadow");

    // Creamos Part Top
    let cardheader = document.createElement("div");
    cardheader.classList.add(
      "border-0",
      "card-header",
      "align-middle",
      "py-0",
      "my-0",
      "bg-transparent"
    );
    // Creamos P dentro de Part Top
    var pPintaT = document.createElement("p");
    pPintaT.innerHTML = pintarandom;
    // Metemos P en Parte Top
    cardheader.appendChild(pPintaT);

    // Creamos Part Mid
    let cardbody = document.createElement("div");
    cardbody.classList.add("my-0", "card-body", "align-middle", "py-0");
    // Creamos P de Part Mid
    let pNum = document.createElement("p");
    pNum.innerHTML = numerorandom;
    //Metemos el P dentro de Part mid
    cardbody.appendChild(pNum);

    // Creanis Part Bot
    let cardfooter = document.createElement("div");
    cardfooter.classList.add(
      "border-0",
      "card-footer",
      "align-middle",
      "py-0",
      "my-0",
      "bg-transparent",
      "rotado"
    );
    // Creamos P dentro de Part Bot
    var pPintaB = document.createElement("p");
    pPintaB.innerHTML = pintarandom;
    // Metemos P en Parte Top
    cardfooter.appendChild(pPintaB);

    //Cambia de color a los corazones y diamantes
    if (pintarandom == "♦" || pintarandom == "♥") {
      pPintaT.style.color = "red";
      pPintaB.style.color = "red";
    }

    //metemos el top mid y bot en la carta
    carddiv.appendChild(cardheader);
    carddiv.appendChild(cardbody);
    carddiv.appendChild(cardfooter);

    return carddiv;
  }
});
