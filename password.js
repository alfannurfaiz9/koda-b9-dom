const input = document.querySelector("#password");
const icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    icon.setAttribute("src", "../assets/eye-open.svg");
    return;
  }

  input.setAttribute("type", "password");
  icon.setAttribute("src", "../assets/eye-close.svg");
});
