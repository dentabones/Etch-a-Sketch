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

const clearContainer = function () {
  containerEl.innerHTML = "";
  createDivs(currentSize);
};

const setGridSize = function (e) {
  //Refactored code
  if (!isNaN(parseInt(this.className))) {
    console.log(parseInt(this.className));
    clearContainer();
    let size = parseInt(this.className);
    containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    currentSize = size * size;
    createDivs(currentSize);
  }
  //Old code
  // if (this.className === "8") {
  //   size = 8;
  //   containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //   containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // } else if (this.className === "16") {
  //   size = 16;
  //   containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //   containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // } else if (this.className === "32") {
  //   size = 32;
  //   containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //   containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // } else if (this.className === "64") {
  //   size = 64;
  //   containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //   containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // } else if (this.className === "100") {
  //   size = 100;
  //   containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  //   containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // }
};

clear.addEventListener("click", clearContainer);
gridSize.forEach((button) => button.addEventListener("click", setGridSize));
