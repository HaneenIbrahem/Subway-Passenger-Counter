// Get the count element from the DOM
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// Initialize the count
let count = 0;

function increment() {
  count++;
  countEl.textContent = count;
}
function save(){
  let countStr = count + " - "
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}