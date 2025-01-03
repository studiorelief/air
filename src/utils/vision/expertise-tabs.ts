import gsap from 'gsap';

export function animateButtonExpertise() {
  // Function to start animation for a button
  const startButtonAnimation = (button: Element) => {
    gsap.to(button, {
      backgroundImage:
        'conic-gradient(from 510deg, #9e144f, #fedbcd, #055d46, #b5413e, #c4671b, #9e144f)',
      duration: 4,
      ease: 'none',
      repeat: -1,
      onUpdate: function () {
        const progress = this.progress();
        const degrees = 150 + progress * 360;
        (button as HTMLElement).style.background =
          `conic-gradient(from ${degrees}deg, #9e144f, #fedbcd, #055d46, #b5413e, #c4671b, #9e144f) border-box`;
      },
    });
  };

  // Initial animation for current buttons
  const buttons = document.querySelectorAll(
    '.usecases_expertise_tabs-link.w--current .usecases_expertise_conic-background'
  );
  buttons.forEach(startButtonAnimation);

  // Watch for class changes on tab links
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target instanceof Element) {
        const tabLink = mutation.target;
        const conicBackground = tabLink.querySelector('.usecases_expertise_conic-background');

        if (conicBackground) {
          if (tabLink.classList.contains('w--current')) {
            startButtonAnimation(conicBackground);
          } else {
            gsap.killTweensOf(conicBackground);
          }
        }
      }
    });
  });

  // Observe all tab links
  const tabLinks = document.querySelectorAll('.usecases_expertise_tabs-link');
  tabLinks.forEach((link) => {
    observer.observe(link, {
      attributes: true,
      attributeFilter: ['class'],
    });
  });
}
