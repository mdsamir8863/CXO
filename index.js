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


const topArrow = document.getElementById("top");
topArrow.addEventListener("click", () => {
  document.body.scrollIntoView();

  console.log("hello");
});

