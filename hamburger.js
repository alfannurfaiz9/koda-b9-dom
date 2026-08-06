const hamburger = document.querySelector("#hamburger-menu");
const ul = document.querySelector("header>nav>ul");
const header2 = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("user") === null &&
    window.location.href !== "http://127.0.0.1:5500/src/login.html"
  ) {
    window.location.href = "/src/login.html";
  }

  if (localStorage.getItem("user") !== null) {
    const newList = document.createElement("p");
    const user = localStorage.getItem("user");
    const { username } = JSON.parse(user);

    const logoutBtn = document.createElement("div");
    const btn = document.createElement("button");
    const a = document.createElement("a");
    const newList2 = document.createElement("li");

    hamburger.addEventListener("click", () => {
      ul.classList.toggle("show");
    });

    a.setAttribute("id", "btn-logout");

    a.innerText = "Logout";

    btn.append(a);

    newList.innerText = `Hello ${username}`;
    logoutBtn.append(newList, btn);
    header2.append(logoutBtn);

    const resLogoutBtn = document.querySelector("#btn-logout");

    resLogoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");

      window.location.href = "http://127.0.0.1:5500/src/login.html";
    });
  }
});
