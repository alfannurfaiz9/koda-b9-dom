const hamburger = document.querySelector("#hamburger-menu");
const ul = document.querySelector("header>nav>ul");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
