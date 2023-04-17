const formRef = document.querySelector(".login-form");
const emailRef = document.querySelector('[type="email"]');
const passwordRef = document.querySelector('[type="password"]');
formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: emailRef.value,
    password: passwordRef.value,
  };
  if (emailRef.value === "" || passwordRef.value === "") {
    return alert("Всі поля мають бути заповнені!");
  }
  console.log(elements);
  form.reset();
});
