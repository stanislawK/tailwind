const input = document.getElementById("link-input");
const err_msg = document.getElementById("err-msg");
const url_form = document.getElementById("link-form");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
url_form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value == "") {
    err_msg.innerText = "Please enter a link";
    input.classList.add("border-red");
  } else {
    err_msg.innerText = "";
    input.classList.remove("border-red");
  }
});
