const a = document.querySelector('a');
const input = document.querySelector('input');

console.log(a.href);
console.log(input.value);
console.log(input.type);
// console.log(a.getAttribute('href'));
a.setAttribute('target', '_blank')
a.setAttribute('href', 'https://www.google.com')