let counter = document.getElementById('counter');
let count = document.getElementById('count');

let c = 0;

count.innerText = 'The button was clicked ${C} times!';
counter.addEventListener('click', () => {
    c++;
    count.innerText = 'The button was clicked ${C} times!';
})