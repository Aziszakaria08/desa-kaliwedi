const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

hamburger.addEventListener("click", () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => line.classList.toggle("change"));
});
