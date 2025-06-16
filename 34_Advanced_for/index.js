// for (let i = 0, getI = () => i; i < 3; i++) {
//   console.log(getI());
// }

// for (var i = 0, getI = () => i; i < 3; ) {
//   i++;
//   console.log(getI());
// }

// let arr = [];

// for (
//   let i = 0, getI = () => i, incrementI = () => i++;
//   getI() < 3;
//   incrementI()
// ) {
//   arr.push(getI);
//   console.log(i);
// }
// Logs 0, 0, 0

for (let i = 0; i < 3; i++) {
  console.log(i);
}
