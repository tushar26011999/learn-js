// document.addEventListener("click", function () {
//   console.log("hello world");
// });
// document.addEventListener("click", function () {
//   console.log("hello world");
// });

// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onmousemove = function () {
//   console.log("hello world");
// };
// function greet() {
//     console.log("hello world");
// }
// const best = document.querySelector(".best");
// best.addEventListener("click", greet());

// const para = document.querySelector(".para");
// para.addEventListener("click", e => console.log(e))
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e, input.value);
} )