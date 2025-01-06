import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initTechLineScroll() {
  const lineElements = document.querySelectorAll('.tech_listing_line-scroll');
  const bulletElements = document.querySelectorAll('.tech_listing_bullet-asset');

  gsap.set(lineElements, { height: '0%' });

  lineElements.forEach((line) => {
    gsap.fromTo(
      line,
      {
        y: '-2rem',
        height: '0%',
      },
      {
        height: '50vh',
        scrollTrigger: {
          markers: false,
          trigger: '.tech_listing_content',
          start: '0 50%',
          end: '416px 50%', // 10 + 15 + 16 = 25 * 16 = 400
          scrub: true,
        },
      }
    );
  });

  gsap.set(bulletElements, { scale: 0, opacity: 0 });

  bulletElements.forEach((bullet, index) => {
    gsap.fromTo(
      bullet,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          trigger: bulletElements[index],
          start: '-50% 55%',
          end: '150% 45%',
          scrub: true,
        },
      }
    );
  });
}
