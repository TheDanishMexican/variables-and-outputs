"use strict";

let number = 0;

window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-increment").addEventListener("click", addNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", subtractNumber);
}

function addNumber() {
  number = number + 1;
  updateNumber();
}

function subtractNumber() {
  number = number - 1;
  updateNumber();
}

function updateNumber() {
  let message = `Tallet er nu: ${number}`;

  document.querySelector("#number").textContent = number;

  if (number > 10) {
    message = "Number is above 10";
  } else if (number == 10) {
    message = "Number is 10";
  } else {
    message = "number is below 10";
  }

  document.querySelector("#message").textContent = message;
}
