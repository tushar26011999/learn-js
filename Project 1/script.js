const checkAllList = document.querySelectorAll(".custom-checkbox");
const inputAll = document.querySelectorAll(".goal-input");
const error = document.querySelector(".error");
const stepscount = document.querySelector(".steps-count");

const allGoals = JSON.parse(localStorage.getItem("goals")) || {};

checkAllList.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    const all = [...inputAll].every((input) => {
      return input.value;
    });
    console.log("All inputs filled:", all);
    if (all) {
      checkbox.parentElement.classList.toggle("completed");
    } else {
      error.style.display = "block";
    }
  });
});

inputAll.forEach((checkbox) => {
  checkbox.value = allGoals[checkbox.id].name
  
if(allGoals[checkbox.id].completed) {
    checkbox.parentElement.classList.toggle("completed");
  }

  checkbox.addEventListener("focus", (event) => {
    error.style.display = "none";
  });
  checkbox.addEventListener("input", (e) => {
    allGoals[e.target.id] = {
      name: checkbox.value,
      completed: false,
    };
    console.log(allGoals);
    localStorage.setItem("goals", JSON.stringify(allGoals));
  });
});

// checkAllList.forEach((checkbox) => {
//     checkbox
// }
