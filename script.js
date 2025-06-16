// Get the count display element. We use const because we do not reassign this variable.
const countDisplay = document.getElementById("count");
// Get the "Enter" button. We use const because we do not reassign this variable.
const increaseButton = document.getElementById("increase");
// Get the Exit button. We use const because we do not reassign this variable.
const decreaseButton = document.getElementById("decrease");

// We use let for count because its value will change.
let count = 0;

// Show the initial count
countDisplay.textContent = "" + count;

// Add a click event listener to the "Enter" button
increaseButton.addEventListener("click", function() {
  // Increase the count by 1
  count ++;
  // Update the display
  countDisplay.textContent = count;
});

// When the Exit button is clicked, decrease the count, but not below 0
decreaseButton.onclick = function() {
  if (count > 0) {
    count = count - 1;
    countDisplay.textContent = "" + count;
  }
};
