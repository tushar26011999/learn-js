const h2 = document.querySelector("h2");
const nameIn = document.querySelector(".name");
const ageIn = document.querySelector(".age");
const nameTag = document.querySelector(".name-tag");
const ageTag = document.querySelector(".age-tag");
const storage = localStorage;
// storage.setItem("name", "John Doe");
// storage.setItem("age", "30");

const myObj = JSON.parse(storage.getItem("myObj")) || {};

nameTag.innerText = myObj.name || "";
ageTag.innerText = myObj.age || "";

nameIn.addEventListener("input", (e) => {
  myObj.name = e.target.value;
  storage.setItem("myObj", JSON.stringify(myObj));
  nameTag.innerText = myObj.name;
});

ageIn.addEventListener("input", (e) => {
  myObj.age = e.target.value;
  storage.setItem("myObj", JSON.stringify(myObj));
  ageTag.innerText = myObj.age;
});

// console.log(storage.getItem("name")); // Output: John Doe
// console.log(storage.getItem("age")); // Output: 30
// console.log(h2)

// input.addEventListener("input", (e) => {
//     const value = e.target.value;
//     storage.setItem("name", value)
// })

// console.log(storage.length);
// storage.removeItem("myName");
// console.log(storage.length);
// function displayStorage() {
//   const name = storage.getItem("name");
//   const age = storage.getItem("age");
//   document.querySelector("h2").innerHTML = `Name: ${name}, Age: ${age}`;
// }

// displayStorage();
