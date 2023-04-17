let counterValue = 0;

const valueRef = document.getElementById("value");

const decrBtnRef = document.querySelector('button[data-action="decrement"]');
decrBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

const incrBtnRef = document.querySelector('button[data-action="increment"]');
incrBtnRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
