"use strict";

const fruits = ["apple", "banana", "cherry", "date"];
// const fruits = "tushar";
// for(let fruit of fruits) {
//     console.log(fruit);
// }

const upFruits = fruits.forEach((fruit) => {
    fruit = fruit.toUpperCase();
});
console.log(upFruits);

const obj = {
    name: "John",
    age: 30,
    city: "New York"
};


// for (let key in obj) {
//     console.log(key, obj[key]);
// }

// const perform1 = Object.keys(obj);
// const perform2 = Object.values(obj);
// const perform3 = Object.entries(obj);
// const perform4 = Object.hasOwn(obj);
// console.log(perform1);
// console.log(perform2);
// console.log(perform3);
// console.log(perform4);
// for (let key of perform) {
//     console.log(key, obj[key]);
// }

