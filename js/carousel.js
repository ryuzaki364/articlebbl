 const carousel = document.getElementById('carouselSlides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelectorAll('.carousel-item');
  const slideCount = slides.length;
  let currentSlide = 0;

  // Function to update the carousel position (sliding effect)
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Prev and Next button actions
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  });

  // Initial update on page load
  updateCarousel();
