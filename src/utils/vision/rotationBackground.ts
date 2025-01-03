import gsap from 'gsap';

export function rotateBackgroundAssets() {
  const blurAssets = document.querySelectorAll('.background-blur-asset');

  blurAssets.forEach((asset) => {
    gsap.to(asset, {
      rotationZ: 360,
      duration: 10,
      repeat: -1,
      ease: 'none',
    });
  });
}
