const fruits = ["apple", "ant", "cherry", "date"];

const filteredFruits = fruits.filter((fruit, index) => {
return fruit.length <= index;
});

const nums = [1, 2, 3, 4, 5];

// const reducedNums = nums.reduce((acc, num) => {
//     console.log("acc", acc);
//     console.log("num", num);
//    return acc + num;
// });

const reducedNums = nums.some((num) => num > 5);
console.log(reducedNums);