const input = document.querySelector("input");

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    console.log(timerId)
    clearTimeout(timerId);

    timerId = setTimeout(() => func(...args), wait);
  };
};

const handleInput = (e) => {
//   console.log(e.target.value);
};

const debounced = debounce(handleInput, 400);

input.addEventListener("input", debounced);
