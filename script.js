"use strict";

const leftBtn = document.getElementById("left__btn");
const rightBtn = document.getElementById("right__btn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const navBtns = document.querySelectorAll(".navButton");

let counter = 0;

rightBtn.addEventListener("click", () => {
  counter++;
  if (counter === slides.length - 3) {
    counter = 0;
  }
  console.log(counter);

  slider.style.transform = `translateX(${-counter * 310}px)`;
});

leftBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 3;
  }
  console.log(counter);
  slider.style.transform = `translateX(${-counter * 310}px)`;
});

navBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(index);
    if (index == 0) {
      counter = 0;
    } else if (index == 1) {
      counter = 3;
    } else if (index == 2) {
      counter = 6;
    }
    slider.style.transform = `translateX(${-counter * 310}px)`;
  });
});

const changeCounter = function () {
  counter = (counter + 1) % (slides.length - 2);
  slider.style.transform = `translateX(${-counter * 310}px)`;
};

setInterval(changeCounter, 3000);
