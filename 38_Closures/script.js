function outer() {
  let a = 0;

  function inner() {
    a++
  }

  return inner;
}

const something = outer()
const some2 = outer()

console.dir(something)
console.dir(some2)