const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// function sayNamaste() {
//     console.log("Namaste");
// }
// function saySecondNamaste() {
//     console.log("Namaste 2 ");
// }

// h1.onclick = sayNamaste;
// h1.onclick = saySecondNamaste;

// h1.addEventListener("click", sayNamaste);

// container.addEventListener("mouseover", function() {
//     console.log("Mouse is over the container");
// });

// card.addEventListener("click", () => {
// container.append(card.cloneNode());
// });

let i = 1;
card.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerText = `Card ${i++}`;
  container.append(div);
});
