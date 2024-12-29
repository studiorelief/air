export function initVisionDarkMode() {
  const { body } = document;
  const animWrappers = document.querySelectorAll('.vision_listing_anim-wrapper');
  const lottieForDarkMode = document.querySelectorAll('.vision_listing_dark-lottie');
  const lottieForWhiteMode = document.querySelectorAll('.vision_listing_white-lottie');
  const animAssets = document.querySelectorAll('.vision_listing_anim-asset');

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        const isDarkMode =
          body.classList.contains('w-mod-js') && body.classList.contains('dark-mode');

        animWrappers.forEach((wrapper) => {
          wrapper.classList.toggle('is-invert', isDarkMode);
        });

        lottieForDarkMode.forEach((lottieDark) => {
          (lottieDark as HTMLElement).style.display = isDarkMode ? 'flex' : 'none';
        });

        lottieForWhiteMode.forEach((lottieWhite) => {
          (lottieWhite as HTMLElement).style.display = isDarkMode ? 'none' : 'flex';
        });

        animAssets.forEach((asset) => {
          asset.classList.toggle('is-invert', isDarkMode);
        });
      }
    });
  });

  observer.observe(body, {
    attributes: true,
    attributeFilter: ['class'],
  });
}
