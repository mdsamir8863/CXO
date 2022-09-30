var mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

const basic = document.getElementById("basic");
const premiumbtn = document.getElementById("Premiumbtn");
// basic.style.backgroundColor = "aquamarine";

const hide = document.getElementById("hidden");
const price = document.getElementById("price");
// hide.style.display = "none";

function basicFunc() {
  const hide = document.getElementById("hidden");
  const price = document.getElementById("price");
  const basic = document.getElementById("basic");
  const premiumbtn = document.getElementById("Premiumbtn");
  hide.style.display = "none";
  price.innerText = "Price just 15,999 Rupees";
  basic.style.backgroundColor = "aquamarine";
  // premiumbtn.style.backgroundColor = "rgb(127, 165, 255)";
  premiumbtn.style.backgroundColor = "white";
  console.log("hello");
}

function premium() {
  const hide = document.getElementById("hidden");
  const price = document.getElementById("price");
  const basic = document.getElementById("basic");
  const premiumbtn = document.getElementById("Premiumbtn");
  price.innerText = "Price just 19,999 Rupees";
  // basic.style.backgroundColor = "rgb(127, 165, 255)";
  basic.style.backgroundColor = "white";
  hide.style.display = "block";
  premiumbtn.style.backgroundColor = "aquamarine";
}

// SCRALL ANIMATION

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const topArrow = document.getElementById("top");
topArrow.addEventListener("click", () => {
  document.body.scrollIntoView();

  console.log("hello");
});

// CAROUSEL JS START
// SETUP

// Sets variables to return inner div and images
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Sets variables to return buttons
const prevBtn = document.querySelector("#prevbutton");
const nextBtn = document.querySelector("#nextbutton");

// Creates a counter to track which image we are on
let counter = 1;
// Selects initial width of image so prog knows how much to slide left or right
const size = carouselImages[0].clientWidth;
// Moves carousel back to start with first image instead of clone
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// FUNCTIONS

// Add a function to track next button clicks
nextBtn.addEventListener("click", function () {
  // If user reaches end of carousel, stop execution
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  // Add 1 to the counter
  counter++;
  // Move carousel
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

//create function to look for PREV button clicks
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

// This function is triggered after transformation
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    // Removes transition effect and translates back to original picture
    carouselSlide.style.transition = "none";
    // -2 because we have duplicate and first image
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    //removes transition effect and translates back to original picture
    carouselSlide.style.transition = "none";
    //-2 because we have duplicate and first
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

// CAROUSEL JS END
