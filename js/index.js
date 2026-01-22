document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');

  let currentIndex = 1;
  let imageWidth = carouselImages.parentElement.clientWidth; // ★ 100%相当

  // 初期位置
  carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

  function slideNext() {
    currentIndex++;
    carouselImages.style.transition = 'transform 0.5s ease';
    carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

    // 最後のダミー対策
    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        carouselImages.style.transition = 'none';
        currentIndex = 1;
        carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
      }, 500);
    }
  }

  // ★ リサイズ対応（超重要）
  window.addEventListener('resize', () => {
    imageWidth = carouselImages.parentElement.clientWidth;
    carouselImages.style.transition = 'none';
    carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
  });

  setInterval(slideNext, 4000);
});
