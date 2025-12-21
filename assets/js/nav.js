// menu button
function toggleNav() {
    document.getElementById("sideNav").classList.toggle("open");
}

function toggleDropdown(el) {
    el.parentElement.classList.toggle("active");
}

// Scroll - hide header
let lastScrollY = window.scrollY;
const header = document.querySelector(".top-header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scrolling down
    header.classList.add("hide");
    header.classList.remove("show");
  } else {
    // scrolling up
    header.classList.remove("hide");
    header.classList.add("show");
  }

  lastScrollY = currentScrollY;
});

// image carousels
let currentSlide = 0;
let autoPlayInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    
    indicators.forEach(function(indicator) {
        indicator.classList.remove('active');
    });
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
function goToSlide(index) {
    showSlide(index);
    resetAutoPlay();
}
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 5000);
}

autoPlayInterval = setInterval(nextSlide, 5000)

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.getElementById('sideNav').classList.remove('active');
        }
    });
});
