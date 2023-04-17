const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
inputRef.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  spanRef.style.fontSize = `${fontSize}px`;
});
