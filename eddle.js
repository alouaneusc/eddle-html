document.addEventListener("DOMContentLoaded", function() {

// Condition
var condition = true; // Change this to your desired condition

// Get references to the table cells
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");

// Add or remove the CSS class based on the condition
 if (condition) {
  box1.classList.add("green");
  box2.classList.add("green");
  box3.classList.add("green");
  box4.classList.add("green");
  box5.classList.add("green");
}/*
if (condition) {
    box6.classList.add("green");
    box7.classList.add("green");
    box8.classList.add("green");
    box9.classList.add("green");
    box10.classList.add("green");
  } else{
    box6.classList.add("yellow");
    box7.classList.add("yellow");
    box8.classList.add("yellow");
    box9.classList.add("yellow");
    box10.classList.add("yellow");
  } */
});