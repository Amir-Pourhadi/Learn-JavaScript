function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
function getQuote() {
  loading();
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => pickFromArray(data))
    .then((quote) => showQuote(quote))
    .catch((err) => alert(err.message));
}

function loading() {
  document.querySelector("#text").innerHTML = "<img class='loading' src='loading.svg' alt='loading'/>";
  document.querySelector("#author").textContent = "- Please Wait";
}

function showQuote({ text, author }) {
  const quoteText = document.querySelector("#text");
  const quoteAuthor = document.querySelector("#author");

  quoteText.textContent = text;
  quoteAuthor.textContent = `- ${author || "WHO?"}`;
}

window.addEventListener("load", getQuote);
window.addEventListener("keypress", (e) => {
  e.key === "Enter" && getQuote();
});
document.getElementById("newBtn").addEventListener("click", getQuote);
