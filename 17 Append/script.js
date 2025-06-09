const container = document.querySelector(".container");

for (let i = 1; i < 10; i++) {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const paragraph = document.createElement("p");

  imgContainer.classList.add("img-container");
  img.src = `https://picsum.photos/100/100?random=${i}`;
  paragraph.innerText = `Image ${i + 1}`;
  imgContainer.append(img, paragraph);
  container.append(imgContainer);

  //   const myHtml = `
  //       <img src="https://picsum.photos/100/100?random=${i}">
  //       <p>Image ${i}</p>
  //     `;
  //   imgContainer.innerHTML = myHtml;
  //   container.append(imgContainer);
}

const myImg = document.querySelector("body > div > div:nth-child(3)");
