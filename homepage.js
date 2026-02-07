/* ================= PAGE INTERACTION SCRIPT ================= */

/* CARD REVEAL ON SCROLL */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealItems.forEach(item => {
  revealObserver.observe(item);
});


/* PREMIUM CLICK FEEDBACK (SMOOTH PRESS EFFECT) */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousedown", () => {
    card.style.transform = "scale(0.95)";
  });

  card.addEventListener("mouseup", () => {
    card.style.transform = "";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});


/* NAVBAR SHADOW ON SCROLL (SUBTLE PREMIUM EFFECT) */
const navbar = document.querySelector(".premium-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.35)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* NAVBAR SCROLL EFFECT */
const nav = document.querySelector(".premium-navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 10){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }
});

/* VARNA SAGA NAVBAR TOGGLE */
const toggle = document.querySelector(".vs-toggle");
const menu = document.querySelector(".vs-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* NAVBAR SHADOW ON SCROLL */
const vsNav = document.querySelector(".vs-navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 10){
    vsNav.style.boxShadow = "0 8px 30px rgba(0,0,0,0.45)";
  }else{
    vsNav.style.boxShadow = "none";
  }
});