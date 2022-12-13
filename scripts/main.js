"use strict";

const containerEl = document.querySelector(".container");
const littleGridStyle = document.querySelector(".littlegrid");
const gridSize = document.querySelectorAll("button");
const clear = document.querySelector(".clear");
const black = document.querySelector(".black");
const color = document.querySelector(".color");
let allDivs = containerEl.querySelectorAll(".littlegrid");
let currentSize;
