const lefts = [
  "Deg | Rad",
  "x!",
  "lnv",
  "sin",
  "ln",
  "Pi",
  "cos",
  "log",
  "e",
  "tan",
  "V",
  "Ans",
  "EXP",
  "Xy",
];

const rights = [
  "&#40",
  "&#41",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "÷",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

const body = document.querySelector("body");
const main = document.createElement("main");

main.classList.add("calculator");

const h1 = document.createElement("h1");
h1.innerText = "Calculator - Minitask 4";

const inputContainer = document.createElement("div");
const inputP = document.createElement("p");
inputP.innerText = "0";

inputContainer.append(inputP);
inputContainer.classList.add("input");

const calcContainer = document.createElement("div");
calcContainer.classList.add("calculator-container");

const leftContainer = document.createElement("div");
leftContainer.classList.add("left");

for (const left of lefts) {
  const div = document.createElement("div");
  div.innerText = left;

  leftContainer.append(div);
}

const rightContainer = document.createElement("div");
rightContainer.classList.add("right");

for (const right of rights) {
  const div = document.createElement("div");
  div.innerText = right;

  rightContainer.append(div);
}

calcContainer.append(leftContainer, rightContainer);

main.append(h1, inputContainer, calcContainer);

body.insertAdjacentElement("beforeend", main);
