// function add(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// console.log(add(2.3, 3.4));

// function add(a, ...arguments) {
//   console.log(arguments);
//   return a + arguments.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(add(2, 3, 5, 7));

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(add(2, 3, 5, 7));

// function multiply(a, b = 1) {
//   return a * b;
// }

// function rollADie(numberOfSides = 6) {
//     return Math.floor(Math.random() * numberOfSides) + 1;
// }

const nums1 = [1, 2, 3, 4, 5];

// function add(a, b, ...nums) {
//   console.log(nums);
//   let sum = 0;
//   for (i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }

// function add(...nums) {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// }
// function add(...nums) {
//   return nums.reduce((acc, curr) => acc + curr);
// }

// const newAdd = add(...nums1);

// console.log(newAdd);

// const colors = ['red', 'green', 'blue'];

// const {2: thirdColor} = colors;
// console.log(thirdColor); // blue

function arr([a, ,b]){
  console.log([a, b]);
}

arr([1, 2, 3]); // [1, 3]
