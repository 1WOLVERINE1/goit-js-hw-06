const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");

spanRef.style.fontSize = inputRef.value + "px";

inputRef.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  spanRef.style.fontSize = `${fontSize}px`;
});
