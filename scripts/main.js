"use strict";

const containerEl = document.querySelector(".container");
const littleGridStyle = document.querySelector(".littlegrid");
const gridSize = document.querySelectorAll("button");
const clear = document.querySelector(".clear");
const black = document.querySelector(".black");
const color = document.querySelector(".color");
let allDivs = containerEl.querySelectorAll(".littlegrid");
let currentSize;

function createDivs(num) {
  for (let i = 0; i < num; i++) {
    let childDiv = document.createElement("div");

    black.addEventListener("click", function () {
      childDiv.addEventListener("mouseover", setBlackColor);
    });

    color.addEventListener("click", function () {
      childDiv.addEventListener("mouseover", setGridColor);
    });
    // childDiv.addEventListener("mouseover", setGridColor);
    containerEl.appendChild(childDiv);
  }
}

const setGridColor = (e) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.backgroundColor = "#" + randomColor;
};

const setBlackColor = (e) => {
  e.target.style.backgroundColor = "#000000";
};
