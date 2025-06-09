const container = document.querySelector(".container");
// const container2 = document.querySelector(".container2");
// const card = document.querySelector(".card");
// const card2 = document.querySelector(".card2");
const h1 = document.querySelector("h1");


// for (let i = 2; i < 102; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.appendChild(newCard);
// }

// const paragraph = document.createElement("p");
// paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.";
// paragraph.classList.add("new-paragraph");
// paragraph.id = "hii";
// const img = document.querySelector("img");

// const img = document.createElement("img");
// img.src = "https://picsum.photos/200/300?random=1";
// img.alt = "Image 1";

for(let i =1; i<100; i++){
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/200/300?random=${i}`;
    newImg.alt = `Image ${i}`;
    container.appendChild(newImg);
}