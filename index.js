const button = document.getElementById('addBtn');
const counterText = document.querySelector('[data-find ="counterValue"]');
const resetBtn = document.getElementById('resetBtn');

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;

counterText.innerText = counter;

addBtn.addEventListener('click', function() {
    counter = counter + parseInt(addBtn.dataset.pools);

    counterText.innerText = counter;
});

resetBtn.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterText.innerText = counter;
});