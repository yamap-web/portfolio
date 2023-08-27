"use strict";

// Hamburger Menu
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
});

// Swiper
let mySwiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  speed: 1500,
  effect: "fade",
});

// GSAP
gsap.from(".l_top-kv_copy", {
  opacity: 0,
  y: 120,
  duration: 2,
  scrollTrigger: ".l_top-kv_copy",
});

gsap.from(".l_section_copy", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: ".l_section_copy",
});

gsap.from(".l_items_item", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: ".l_items_item",
});

gsap.from(".l_section_desc", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: ".l_section_desc",
});

gsap.from(".l_aboutme_name-en", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: ".l_aboutme_name-en",
});

gsap.from(".l_aboutme_name-jp", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: ".l_aboutme_name-jp",
});
