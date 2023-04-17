const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");
inputRef.addEventListener("input", (event) => {
  const inputVal = event.target.value.trim();
  spanRef.textContent = inputVal ? inputVal : "Anonimous";
});
