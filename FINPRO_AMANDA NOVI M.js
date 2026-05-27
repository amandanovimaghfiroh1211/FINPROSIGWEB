// POPUP SELAMAT DATANG
const welcomePopup = document.getElementById("welcomePopup");
const enterBtn = document.getElementById("enterBtn");

window.addEventListener("load", () => {
  welcomePopup.style.display = "flex";
});

enterBtn.addEventListener("click", () => {
  welcomePopup.style.display = "none";
});
// NAVBAR ACTIVE
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-menu a");
  const sections = document.querySelectorAll("section");

  // KLIK NAVBAR
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // kalau bukan link # (misal ke CV), biarin normal
      if (!targetId.startsWith("#")) return;

      e.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });

      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // kalau bukan link # (misal ke CV), biarin normal
      if (!targetId.startsWith("#")) return;

      e.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });

      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // SCROLL DETECT
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
// HERO SLIDER
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
function showHero(n) {
  heroSlides.forEach((sl) => sl.classList.remove("active"));
  heroSlides[n].classList.add("active");
}
function nextHero() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHero(heroIndex);
}
function prevHero() {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  showHero(heroIndex);
}
showHero(heroIndex);

// CARD SLIDER
const track = document.getElementById("sliderTrack");
let cardIndex = 0;
const cards = document.querySelectorAll(".card");
const visibleCards = 3;
const cardWidth = cards[0].offsetWidth + 30;
function updateSlider() {
  track.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
}
function nextCard() {
  if (cardIndex < cards.length - visibleCards) {
    cardIndex++;
    updateSlider();
  }
}
function prevCard() {
  if (cardIndex > 0) {
    cardIndex--;
    updateSlider();
  }
}

// CHART
const ctx = document.getElementById("pendudukChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Tarik", "Prambon", "Krembung", "Porong", "Jabon", "Tanggulangin", "Candi", "Tulangan", "Wonoayu", "Sukodono", "Sidoarjo", "Buduran", "Sedati", "Waru", "Gedangan", "Taman", "Krian", "Balongbendo"],
    datasets: [
      {
        label: "Jumlah Penduduk",
        data: [1664.84, 2557.58, 2396.34, 2255.65, 651.88, 2870.25, 3481.54, 3128.71, 2687.19, 3605.69, 3131.5, 2212.6, 1174.57, 6296.6, 4832.74, 6310.33, 4894.48, 1637.05],
        backgroundColor: ["#2e7d62", "#3da35d", "#4caf50", "#66bb6a", "#81c784", "#a5d6a7", "#2e7d62", "#3da35d", "#4caf50", "#66bb6a", "#81c784", "#a5d6a7", "#2e7d62", "#3da35d", "#4caf50", "#66bb6a", "#81c784", "#a5d6a7"],
      },
    ],
  },
  options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } },
});

// DARK MODE TOGGLE
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// SCROLL TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
