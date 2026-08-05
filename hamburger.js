const hamburger = document.querySelector("#hamburger-menu");
const ul = document.querySelector("header>nav>ul");

hamburger.addEventListener("click", () => {
  if (!ul.classList.value) {
    hamburger.setAttribute("src", "./assets/close.svg");
    ul.classList.add("show");
    return;
  }

  hamburger.setAttribute("src", "./assets/hamburger.svg");
  ul.classList.remove("show");
});
