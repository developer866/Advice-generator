async function adviceApi() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  Id(data.slip);
  adviceText(data.slip);
}

adviceApi();
const adviceId = document.getElementById("AdviceId");
const AdviceText = document.getElementById("AdviceText");
const Dice = document.getElementById("dice");

function Id(num) {
  adviceId.innerHTML = `<h1>Advice #${num.id}</h1>`;
}
function adviceText(text) {
  AdviceText.innerHTML = `<p>"${text.advice}"</p>`;
}
Dice.addEventListener("click", function () {
  adviceApi();
  console.log("hello world");
});
