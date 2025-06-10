const blockBtn = document.querySelector(".blockBtn");

blockBtn.addEventListener("click", () => {
  let startTime = Date.now();
  let currentTime = startTime;
  console.log("Blocking the main thread...");
  while (startTime + 5000 > currentTime) {
    currentTime = Date.now();
  }
});
