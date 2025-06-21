const input = document.querySelector("input");
const span = document.querySelector("span");

const callApi = (value) => {
  console.log(value);
  console.log(this);
};

function throttle(func, wait = 300) {
  let timerId = null;
  let lastArgs = [];
  let firstCall = true;

  return function (...args) {
    lastArgs = args;
    if (firstCall) {
      func.apply(this, lastArgs);
      firstCall = false;
      return;
    }
    if (timerId) return;
    timerId = setTimeout(() => {
      timerId = null;
      func.apply(this, lastArgs);
    }, wait);
  };
}

const inputChange = throttle(callApi, 400);

input.addEventListener("input", (e) => {
  inputChange.call({name: "Tushar"}, e.target.value);
});

const spanChange = () => {
  span.innerText = ++span.innerText;
};

// const throttled = throttle(spanChange, 500);

// document.addEventListener("mousemove", throttled);
