let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-images img').length;

function showImage(index) {
  currentIndex = index - 1;
  const translateValue = -currentIndex * 100 + '%';
  images.style.transform = 'translateX(' + translateValue + ')';
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex + 1);
}