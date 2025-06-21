// function multiply(x, y, z) {
//   return x * y * z;
// }

// multiply(2, 3, 5);

function callMult(x) {
  return function (y) {
    if (y) return callMult(x * y);
    return x;
  };
}

const mult = callMult(2)(3)(4)

// function multiplyByTwo(x) {
//     return x * 2
// }

// function multiplyByFour(x) {
//     return x * 4
// }

// function multiplyByNine(x) {
//     return x * 9
// }
