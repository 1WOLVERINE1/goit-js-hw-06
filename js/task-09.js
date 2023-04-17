function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
buttonRef.addEventListener("click", () => {
  spanRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = spanRef.textContent;
});
