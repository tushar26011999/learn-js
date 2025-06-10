const usernameInput = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector("form");
// usernameInput.addEventListener("click", () => {
//     console.log("Input clicked");
// });

// usernameInput.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   paragraph.textContent = event.target.value;
//   paragraph.style.color = "red";
// });

// usernameInput.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   paragraph.textContent = event.target.value;
//   paragraph.style.color = "red";
// });
// usernameInput.addEventListener("blur", (event) => {
//   console.log(event.target.value);
//   paragraph.textContent = event.target.value;
//   paragraph.style.color = "red";
// });
// usernameInput.addEventListener("focus", (event) => {
//   console.log(event.target.value);
//   paragraph.textContent = event.target.value;
//   paragraph.style.color = "red";
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const myFormData = new FormData(form);
  console.log(myFormData.entries());
  for (const p of myFormData.entries()) {
    console.dir(p);
  }
});
