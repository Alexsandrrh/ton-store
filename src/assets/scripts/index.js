const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const { body } = document;
const menu = document.getElementById("menu");

btnOpen.addEventListener("click", function () {
  body.classList.add("-hidden");
  menu.classList.add("-open");
});

btnClose.addEventListener("click", function () {
  body.classList.remove("-hidden");
  menu.classList.remove("-open");
});
