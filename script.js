// Get the count display element. We use const because we do not reassign this variable.
const countDisplay = document.getElementById("count");
// Get the "Enter" button. We use const because we do not reassign this variable.
const increaseButton = document.getElementById("increase");

// We use let for count because its value will change.
let count = 0;

// Add a click event listener to the "Enter" button
increaseButton.addEventListener("click", function() {
  // Increase the count by 1
  count = count + 1;
  // Update the display
  countDisplay.textContent = count;
});
