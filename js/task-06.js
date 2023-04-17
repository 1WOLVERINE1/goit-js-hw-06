const inputRef = document.getElementById("validation-input");
const dataAttribute = inputRef.getAttribute("data-length");
inputRef.addEventListener("blur", (event) => {
  const inputValue = event.target.value.trim().length;
  if (inputValue === Number(dataAttribute)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
