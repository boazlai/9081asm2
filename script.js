// Optional: Add active class to nav items on scroll
const sections = document.querySelectorAll("section, .scroll-target");
const navLi = document.querySelectorAll("nav ul li a");
const main = document.querySelector("main");

main.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (main.scrollTop >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// Scroll Animation
const observerOptions = {
  root: main, // Use main as the viewport since it handles scrolling
  threshold: 0.15, // Trigger when 15% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(
  "section, .checkpoint, h1, .subtitle, .intro-text, .scroll-target"
);
hiddenElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
