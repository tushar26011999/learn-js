// "use strict";

// console.log(window); // window

// location.reload();

const imagesUrl = [
  "https://plus.unsplash.com/premium_photo-1747371476846-1af8fbc9f3c3?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1745990652119-f13cced69b7c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1745933229147-68202b50274b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const images = document.querySelectorAll("img");

function imgChange() {
  images.forEach((img, index) => {
    img.src = imagesUrl[index];
    img.alt = `Image ${index + 1}`;
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    img.style.transition = "transform 0.2s";
    img.style.cursor = "pointer";
  });
}


const p = document.querySelector("p");