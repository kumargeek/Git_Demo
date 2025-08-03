// script.js - Random interactive JS

// When the page loads
window.onload = function () {
  console.log("Page loaded!");
};

// Change text content on button click
function changeMessage() {
  const message = document.getElementById("message");
  message.textContent = "🎉 You clicked the button!";
  message.style.color = getRandomColor();
}

// Generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// Add click listener to the button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");
  if (button) {
    button.addEventListener("click", changeMessage);
  }
});
