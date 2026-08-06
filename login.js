const login = document.querySelector("#login");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.username.value.length <= 4) {
    const error = document.querySelector("#error");
    error.classList.add("red");
    error.innerText = "Username minimal 5 karakter";
    return;
  }

  if (e.target.password.value.length <= 4) {
    const error = document.querySelector("#error");
    error.classList.add("red");
    error.innerText = "Password minimal 5 karakter";
    return;
  }

  const input = {
    username: e.target.username.value,
    password: e.target.password.value,
  };

  error.classList.add("hide");
  localStorage.setItem("user", JSON.stringify(input));
  window.location.href = "/index.html";
});
