const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");
const input = document.querySelector("input");
const form = document.querySelector("form");

inner.addEventListener("click", (event) => {
//   event.stopPropagation();
  console.log("Inner clicked");
});
outer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Outer clicked");
});

setTimeout(() => {
  input.focus()
  console.log("input focus")
},1000)