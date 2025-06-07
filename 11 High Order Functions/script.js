// function a(b) {
//   console.dir(b);
//   return b;
// }

// function b() {
//     console.log("hello");
// }

// a(b);
// setTimeout("console.log('hello'); console.log('ram')", 1000);

// const newer = 6;
// const timer1 = setTimeout("console.log('ram')", 1000);
// const timer2 = setTimeout(console.log("hi"), 2000);
// const timer3 = setTimeout(console.log, 3000, "hello");
// const timer4 = setTimeout("newer", 4000);

const timer = setTimeout(a, 1000, "helllo", "b", 2, 4);

function a() {
    console.log("inside");
    console.log(arguments);
}