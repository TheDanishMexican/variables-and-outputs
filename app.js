"use strict";

let number = 0;

window.addEventListener("load", start);

function start() {
  console.log("start works");
  document.querySelector("#btn-increment").addEventListener("click", addNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", subtractNumber);
}

function addNumber() {
  console.log("add works");
  number = number + 1;
  updateNumber();
}

function subtractNumber() {
  console.log("subtract works");
  number = number - 1;
  updateNumber();
}

function updateNumber() {
  document.querySelector("#number").textContent = number;

  let message = `Tallet er nu: ${number}`;

  console.log("message works");
  document.querySelector("#message").textContent = message;
}
