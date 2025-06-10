const h1 = document.querySelector("h1");
const input = document.querySelector("input");

console.log(h1);

h1.addEventListener("keydown", (event) => {
  console.log("keydown");
});
h1.addEventListener("keyup", (event) => {
  console.log("keyup", event);
});
h1.addEventListener("keypress", (event) => {
  console.log("keypress", event);
});
