/**
 * Main site JS — hero carousel, mobile nav, dynamic images from images.js
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  applySiteImages();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

function initHeroCarousel() {
  const carousel = document.querySelector(".hero-carousel");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".hero-slide");
  const dots = carousel.querySelectorAll(".carousel-dot");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");

  if (slides.length === 0) return;

  let current = 0;
  let timer = null;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, 6000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  prevBtn?.addEventListener("click", () => {
    prev();
    startAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    next();
    startAutoplay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAutoplay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  goTo(0);
  startAutoplay();
}

/**
 * Apply paths from SITE_IMAGES (js/images.js) to DOM elements
 * that have data-image-key attributes.
 */
function applySiteImages() {
  if (typeof SITE_IMAGES === "undefined") return;

  // Profile photo
  const profileImg = document.querySelector("[data-image-key='profile']");
  if (profileImg) setImageSrc(profileImg, SITE_IMAGES.profile);

  // Hero slides (built in HTML or injected)
  const heroContainer = document.querySelector(".hero-slides-container");
  if (heroContainer && SITE_IMAGES.heroSlides?.length) {
    heroContainer.innerHTML = "";
    SITE_IMAGES.heroSlides.forEach((slide, i) => {
      const el = document.createElement("div");
      el.className = `hero-slide${i === 0 ? " active" : ""}`;
      el.innerHTML = `
        <!-- ADD YOUR IMAGE HERE: hero carousel slide ${i + 1} — file: ${slide.src} -->
        <img src="${slide.src}" alt="${slide.title}" data-fallback="hero">
        <div class="hero-overlay">
          <h2>${slide.title}</h2>
          <p>${slide.subtitle}</p>
          <a href="${slide.link}" class="btn-read-more">Read More &rsaquo;</a>
        </div>
      `;
      heroContainer.appendChild(el);
    });

    const dotsContainer = document.querySelector(".carousel-dots");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      SITE_IMAGES.heroSlides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        dotsContainer.appendChild(dot);
      });
    }

    initHeroCarousel();
  }

  // Project thumbnails
  document.querySelectorAll("[data-image-key^='project-']").forEach((img) => {
    const key = img.dataset.imageKey.replace("project-", "");
    const path = SITE_IMAGES.projects?.[key];
    if (path) setImageSrc(img, path);
  });

  // Research images
  document.querySelectorAll("[data-image-key^='research-']").forEach((img) => {
    const key = img.dataset.imageKey.replace("research-", "");
    const path = SITE_IMAGES.research?.[key];
    if (path) setImageSrc(img, path);
  });

  // Optional org logos
  document.querySelectorAll("[data-image-key^='logo-']").forEach((img) => {
    const key = img.dataset.imageKey.replace("logo-", "");
    const path = SITE_IMAGES.logos?.[key];
    if (path) {
      setImageSrc(img, path);
      img.classList.remove("hidden");
    }
  });

  attachImageFallbacks();
}

function setImageSrc(img, src) {
  img.src = src;
  img.alt = img.alt || "Julian Ruocco portfolio image";
}

function attachImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const parent = img.parentElement;
      if (!parent || parent.querySelector(".img-placeholder")) return;

      img.style.display = "none";
      const placeholder = document.createElement("div");
      placeholder.className = "img-placeholder";
      placeholder.textContent = `Add image: ${img.getAttribute("src")}`;
      parent.insertBefore(placeholder, img);
    }, { once: true });
  });
}
