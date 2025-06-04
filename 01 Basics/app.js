// let name = "tushar";
// let whatDoYouWannaBecome = "Full Stack Developer";
// let gender = "male";
// let twitterHandle = "@tushar";
// console.log(
//   `Name: ${name}, Profession: ${whatDoYouWannaBecome}, Gender: ${gender}, Twitter: ${twitterHandle}`
// );

// let firstFavNam = 77;
// let secondFavNum = 7;
// console.log(firstFavNam + secondFavNum);
// console.log(firstFavNam - secondFavNum);
// console.log(firstFavNam * secondFavNum);
// console.log(firstFavNam / secondFavNum);
// console.log(firstFavNam % secondFavNum);
// console.log(firstFavNam ** 2);

// Boolean
// falsy values: 0, "", null, undefined, NaN

// let isJsProgrammingLanguage = true;
// let isJsHard = false;
// let favNumb = 33;

// console.log(isJsProgrammingLanguage, isJsHard, favNumb + undefined);

// let favNum = 77;
// let favNumber = 70;

// console.log(favNum > favNumber);
// console.log(favNum < favNumber);
// console.log(favNum >= favNumber);
// console.log(favNum >= favNumber);
// console.log(favNum === favNumber);
// console.log(favNum == favNumber);
// console.log(favNum !== favNumber);
// console.log(favNum != favNumber);

// let favNum = 77;
// let favNumber = "77";
// console.log(favNum > favNumber);
// console.log(favNum < favNumber);
// console.log(favNum >= favNumber);
// console.log(favNum >= favNumber);
// console.log(favNum === favNumber);
// console.log(favNum !== favNumber);
// console.log(favNum == favNumber);
// console.log(favNum != favNumber);

// let favActName = "hrithik";
// let favAct = "amitabh";
// let fullName = favActName + " " + favAct;
// console.log(fullName);

// console.log(fullName.toUpperCase());
// console.log(`${fullName.toUpperCase()}, his best movie is Agneepath`);
// console.log(`My favourite actor is ${fullName.toUpperCase()}, and he is a great actor`);

// let password;

// if(password === 8) {
//     console.log("Welcome");
// }
// else if(password <= 8){
//     log("Password is too short");
// }
// else if (password >= 8){
//     console.log("Password is too long");
//     console.log("Password should be 8 characters long");
// }
// else {
//     console.log("please enter a password");
// }

// let expert = "0";

// switch (expert) {
//     case "0":
//         console.log("Beginner");
//         break;
//     case "1":
//         console.log("Intermediate");
//         break;
//     case "2":
//         console.log("Expert");
//         break;
//     default:
//         console.log("Please enter a valid number");
//         break;
// }

// let fruit = "banana";

// switch (fruit) {
//     case "apple":
//         console.log("Apple is red");
//         break;
//     case "banana":
//         console.log("Banana is yellow");
//         break;
//     case "grapes":
//         console.log("Grapes are green");
//         break;
//     default:
//         console.log("Please enter a valid fruit");
//         break;
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for(let i=0; i<=1000; i++){
//     console.log("I am a frontent developer", i);
// }

// let i=1;

// while(i<=10){
//     console.log("hello", i);
//     i++;
// }

// let i=10;

// while(i<=100){
//     console.log("Tushar", i);
//     i++;
// }
// let i=10;

// do{
//     console.log("Tushar", i);
//     i++;
// }while(i<=9)

// let i=20;

// do{
//     console.log("Tushar", i);
//     i++;
// }while(i<=400)

// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// console.log(fruits.push("kiwi"));
// fruits.pop();
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift("kiwi"));
// console.log(fruits.sort());
// console.log(fruits.includes("banana"));
// console.log(fruits.join("="));
// console.log(fruits.reverse());
// console.log(fruits.slice(2,3));

// let car = {
//     type: "sedan",
//     model: "Xl",
//     color: "black",
// }

// car.type = "SUV"
// car.wheels = "4"
// console.log(car.color);
// console.log(car);

// function myFunction(a, b) {
// return a * b;
// }

// console.log(myFunction(4, 3));

// function callFunc(fn) {
// let version = 10;
// fn(version);
// }

// function fn(version) {
//   console.log(`This is version ${version}`);
// }
// callFunc(fn)

// let date = new Date();

// console.log(date.valueOf(2021, 10, 10));

// const quick = `This is a
// quick brown
// fox`;
// console.log(quick);

// let firsVar = "Tushar";
// let secondVar = "Parashar";
// console.log(`${firsVar} ${secondVar}`);

// var a = 1;
// var b = 10;
// var c = 20;

// var obj = {
//   a,
//   b,
//   c,
// };
// console.log(obj);

// let lib = {
//     sum: (a, b) =>  a + b,
//     mult: (a, b) =>  a * b
// }
// console.log(lib.sum(2, 3));
// console.log(lib.mult(2, 3));

// function countTo5(count =true){
//     if(count === true) {
//         for(let i=1; i<=5; i++){
//             console.log(i);
//         }
//     }
// }

// countTo5();

// function multiplyTwo(a, b=2) {
//     console.log(a * b);
// }

// multiplyTwo(3);

// const food = ["apple", "banana", "grapes", "mango", "orange"];

// const [first, second, ...rest] = food;
// console.log(first);
// console.log(second);
// console.log(rest);

// const colors = ["red", "green", "blue", "yellow", "orange"];
// const [color1, color2, color3,] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// const person = {
//     name: "Tushar",
//     age: 26,
//     hobby: "Cricket"
// }

// const {name, age, hobby} = person;

// console.log(name, age, hobby);

// const object = {
//     name: "Tushar",
//     age: 26,
//     hobby: "Cricket"
// }

// for(let keys in object) {
//     console.log(`${keys}: ${object[keys]}`);
// }

// const array1 = ["a", "b", "c"];

// for(const value of array1) {
//     console.log(value);
// }

// const array = ["hello", "my", "name", "is", "Tushar"];

// const capitalizeArr = array.forEach((arr, index, newArr) => {

//     newArr[index] = arr[0].toUpperCase() + arr.substring(1);
// })

// console.log(array);

// const numberArr = [1,2,3, 4,5];
// let sum = 0;

// function sumOf(num) {
//    sum += num;
// }
// console.log(sum);

// numberArr.forEach(sumOf)
// console.log(sum);

// let numberss = [1,2,3,4,5];
// let double = numberss.map((num) =>  num * 2);
// console.log(numberss);
// console.log(double);

// let products = [
//     {name: "Checkers", price: 100},
//     {name: "Pepsi", price: 50},
//     {name: "Coke", price: 60},
//     {name: "Fanta", price: 70},
// ];

// let product = products.find((product) => product.name === "Coke");

// for(let i=0; i<products.length; i++){
//     if(products[i].name === "Coke"){
//         product = products[i];
//         break;
//     }
// }

// console.log(product);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const aggNum = numbers.reduce((p, e) => {
//   return p + e;
// }, 0);

// console.log(aggNum);

// const peoples = [
//   {
//     name: "Tushar",
//     age: 26,
//   },
//   {
//     name: "Virat",
//     age: 30,
//   },
//   {
//     name: "MS",
//     age: 43,
//   },
// ];

// const fortyPlus = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);

// console.log(fortyPlus);

// const fruits = ["apple", "apple", "banana", "apple", "orange", "banana", "apple", "banana", "apple"];

// const count = fruits.reduce((acc, current) => {
//     console.log(acc[current]);
//     acc[current] = (acc[current] || 0) + 1;
//     return acc;
// }, {});

// console.log(count);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function productNum(numbers) {
//     return numbers.reduce((p, e) => p * e, 1);
// }
// console.log(productNum(numbers));

// const map = new Map();

// const keyOne = "string";
// const keyTwo = { a: 1 };
// const keyThree = () => {};

// map.set(keyOne, "value associated with string");
// map.set(keyTwo, "value associated with object");
// map.set(keyThree, "value associated with function");

// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyOne));
// console.log(map);

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// const setArr = [1, 2, 3, 4];
// const set = new Set(setArr);
// set.add(5);
// console.log(set);

const mySymbol1 = Symbol("symbol");
const mySymbol2 = Symbol("symbol");

const obj = {
  [mySymbol1]: "value",
  [mySymbol2]: "value",
};

console.log(obj);