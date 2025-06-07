const input = document.querySelector("input");
input.maxLength = 1;
// input.addEventListener("keypress", function (event) {
//     console.log("keypress event triggered", event.target.value);
// });
// input.addEventListener("keyup", function (event) {
//     console.log("keyup event triggered", event.target.value);
// });
// input.addEventListener("keydown", (event) => {
//     console.log("keydown event triggered", event.target.value);
// });
input.addEventListener("keypress", (event) => {
    // console.log("keypress charcode", event.key.charCodeAt(0));
    // console.log("keypress charcode", event.code);
    console.log("keypress charcode", event.ctrlKey);
    console.log("keypress charcode", event.shiftKey );
});
// const click = document.querySelector(".click");
// click.addEventListener("click", function () {
//     console.log("click event triggered");
// });
// const mouseenter = document.querySelector(".mouseenter");
// mouseenter.addEventListener("mouseenter", function () {
//     console.log("mouseenter event triggered");
// });

// const mouseleave = document.querySelector(".mouseleave");
// mouseleave.addEventListener("mouseleave", function () {
//     console.log("mouseleave event triggered");
// });
// const mousedown = document.querySelector(".mousedown");
// mousedown.addEventListener("mousedown", function () {
//     console.log("mousedown event triggered");
// });
// const mouseup = document.querySelector(".mouseup");
// mouseup.addEventListener("mouseup", function () {
//     console.log("mouseup event triggered");
// });

// const dbclick = document.querySelector(".dblclick");
// dbclick.addEventListener("dblclick", function () {
//     console.log("dblclick event triggered");
// });
// const contextmenu = document.querySelector(".contextmenu");
// contextmenu.addEventListener("contextmenu", function () {
//     console.log("contextmenu event triggered");
// });