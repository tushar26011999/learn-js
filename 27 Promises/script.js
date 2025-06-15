// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("tushar");
//   }, 5000);
//   // reject("tushar")
// });
// console.log(p);

const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });

  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
});

// p.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// }).finally(() => {
//     console.log("Promise has been settled (either resolved or rejected)");
// })

const p2 = p.catch((data) => {
  console.log(data);
});

console.log(p2)