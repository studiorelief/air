import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateUsecasesAsset() {
  const animAssets = document.querySelectorAll('.usecases_listing_anim-asset');
  const triggers = document.querySelectorAll('.usecases_listing_content');

  animAssets.forEach((asset, index) => {
    gsap.fromTo(
      asset,
      {
        y: '-1rem',
      },
      {
        y: '1rem',
        scrollTrigger: {
          markers: false,
          trigger: triggers[index],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  const cards = document.querySelectorAll('.usecases_listing_cards');

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: '5rem',
      },
      {
        y: '-5rem',
        scrollTrigger: {
          markers: false,
          trigger: triggers[index],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}
