const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

let i = 1;

h1.addEventListener("pointermove", () => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerText = `Card ${i++}`;
  container.append(div);
});

// card.addEventListener("touchmove", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("touchstart", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("wheel", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("mousemove", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("dblclick", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("mousedown", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });
// card.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });

// card.addEventListener("mouseup", () => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerText = `Card ${i++}`;
//   container.append(div);
// });
