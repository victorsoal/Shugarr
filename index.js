const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.textContent = "Sweet! 💖 You just made my day, Sugar 🍭✨";
  document.body.style.background =
    "linear-gradient(135deg, #ff758c, #ff7eb3)";
});

maybeBtn.addEventListener("click", () => {
  result.textContent = "Haha 😄 I’ll take that as a soft yes 😉🍬";
});
