let w = window.innerWidth;

/**
 * ルートのフォントサイズを変更
 * SP時は 375px を基準に可変
 */
function changeRootFontSize() {
  if (w <= 677) {
    document.documentElement.style.setProperty(
      '--fz',
      (10 / 375) * w + 'px'
    );
  } else {
    document.documentElement.style.setProperty('--fz', '10px');
  }
}

changeRootFontSize();
window.addEventListener('resize', () => {
  w = window.innerWidth;
  changeRootFontSize();
});

/**
 * スクロールアニメーション
 * .js-scr-anin が画面内に入ったら .scr-anin--on を付与
 */
function scrollAnimation() {
  const targets = document.querySelectorAll('.js-scr-anin');
  if (!targets.length) return;

  const handleScroll = () => {
    const scroll = window.scrollY;
    const h = window.innerHeight;

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const pos = scroll + rect.top;

      if (scroll + h * 0.8 > pos) {
        el.classList.add('scr-anin--on');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // 初回もチェックしておく
  handleScroll();
}

// 'load' の綴りミスを修正
window.addEventListener('load', () => {
  scrollAnimation();
});
