let counter = document.getElementById('counter');
let count = document.getElementById('count');

let clear = document.getElementById('clear');

let c = 0;

count.innerText = `The button was clicked ${c} times!`;
counter.addEventListener('click', () => {
    c++;
    count.innerText = `The button was clicked ${c} times!`;
})

clear.addEventListener("click", () => {
    c = 0;
    count.innerText = `The button was clicked ${c} times!`; 
})