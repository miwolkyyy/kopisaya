const chartBtn = document.querySelector(".chart-btn");

const slider = document.querySelector(".slider-body");

const closed = document.querySelector(".closed");

chartBtn.addEventListener("click", function () {
  slider.style.width = "30vw";
});

// closed.addEventListener("click", function () {
// });

document.addEventListener("click", function (e) {
  if (closed.contains(e.target)) {
    slider.style.width = "0";
  }
  if (!slider.contains(e.target) && !chartBtn.contains(e.target)) {
    slider.style.width = "0";
  }
});
