document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const imageWidth = 350; // 実際の幅に合わせる
  let currentIndex = 1;   // ★ 最初は「本物1枚目」

  // 初期位置
  carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

  function slideNext() {
    currentIndex++;
    carouselImages.style.transition = 'transform 0.5s ease';
    carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

    // ★ 最後のダミーに来たら瞬時に戻す
    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        carouselImages.style.transition = 'none';
        currentIndex = 1;
        carouselImages.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
      }, 500);
    }
  }

  setInterval(slideNext, 4000);
});

