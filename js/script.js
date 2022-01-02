const btn = document.getElementById("mobile-button");
const menu = document.getElementById("navigation");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
