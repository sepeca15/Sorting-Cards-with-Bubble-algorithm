/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let drow = document.querySelector("#drow");
drow.addEventListener("click", function(e) {
  e.preventDefault();
  let entCard = document.querySelector("#entCard");
  var cartasAgenerar = [];
  cartasAgenerar.push(entCard.value);
  console.log(cartasAgenerar);
  drow.disabled = true;

  /*   for(){
  } */
});
