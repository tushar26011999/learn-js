const container = document.querySelector(".container");
const card = document.querySelector(".card");
const addCard = document.querySelector(".add-card");

let count = 1;
card.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  // newCard.addEventListener('click', () => {
  //     newCard.remove()
  // })
  container.append(newCard);
});

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});
