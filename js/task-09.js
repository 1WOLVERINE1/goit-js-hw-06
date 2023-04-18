function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
buttonRef.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
});
