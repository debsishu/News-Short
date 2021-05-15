gsap.from(".nav-bar", {opacity : 0, duration: 1, y: -70, ease: "Power1.easeInOut" });
gsap.from(".right", {
  opacity: 0,
  duration: 1,
  x: 400,
  ease: "Power3.easeInOut",
});
gsap.from(".stagger", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power1.easeInOut",
  stagger: 0.3,
});
gsap.from(".circle", {
  opacity: 0,
  x: -100,
  ease: "Power1.easeInOut",
  delay: "1",
});

const heroButton = document.querySelector(".hero-btn");
const heroh2 = document.querySelector(".hero-h2");

heroButton.addEventListener("mouseover", () => {
  gsap.from(".hero-h2", {
    opacity: 0,
    duration: 0.5,
    y: -30,
    ease: "Cric.easeOut",
  });
  heroh2.innerText = "So What Are You Waiting For";
});

heroButton.addEventListener("mouseout", () => {
  gsap.from(".hero-h2", {
    opacity: 0,
    duration: 0.5,
    y: 30,
    ease: "Cric.easeOut",
  });
  heroh2.innerText = "Reading News In A New Way";
});

gsap.from(".card-container", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power3.easeInOut",
  delay: "0.7",
});

