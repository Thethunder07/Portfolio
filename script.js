// ────────── Burger Menu ──────────
const menuBtn = document.getElementById('menuIcon');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('bx-x'); // toggle icon
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.classList.remove('bx-x');
  });
});

// ────────── Dark Mode Toggle (with localStorage) ──────────
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'enabled');
  themeIcon.classList.replace('bx-moon', 'bx-sun');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.removeItem('dark-mode');
  themeIcon.classList.replace('bx-sun', 'bx-moon');
}

// Check saved preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  enableDarkMode();
}

themeIcon.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// ────────── Skill Circle Animation ──────────
document.querySelectorAll('.circle').forEach(circle => {
  const percent = parseInt(circle.getAttribute('data-percent'), 10);
  const degree = (percent / 100) * 360;
  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    circle.style.background = `conic-gradient(#754ef9 ${progress}deg, #333 ${progress}deg)`;
    if (progress >= degree) clearInterval(interval);
  }, 10);
});

// ────────── Animate Progress Bars ──────────
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".progress-bar span");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    const originalWidth = bar.style.width;
    bar.style.width = "0%";
    bar.setAttribute("data-width", originalWidth);
    observer.observe(bar);
  });
});

// ────────── Project Slider ──────────
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".projects-container");
  const prevBtn = document.querySelector(".left-btn");
  const nextBtn = document.querySelector(".right-btn");

  if (!container || !prevBtn || !nextBtn) return;

  const card = document.querySelector(".project-card");
  if (!card) return;

  const cardStyles = window.getComputedStyle(card);
  const gap = parseInt(cardStyles.marginRight) || 20;
  const cardWidth = card.offsetWidth + gap;
  const scrollAmount = cardWidth * 3;

  nextBtn.addEventListener("click", function () {
    container.scrollLeft += scrollAmount;
  });

  prevBtn.addEventListener("click", function () {
    container.scrollLeft -= scrollAmount;
  });
});

// ────────── Scroll Reveal Animation ──────────
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});

// ────────── Contact Form Redirect ──────────
function redirectToThankYou(event) {
  event.preventDefault();
  const button = event.target.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";

  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 1500);
}

// ────────── Download CV ──────────
const downloadBtn = document.getElementById("downloadCV");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "img/AAKARSH-KASHYAP RESUME.pdf";
    link.download = "My_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
